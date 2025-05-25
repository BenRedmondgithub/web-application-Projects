const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser()); // Add this line to use cookie-parser


const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        await db.collection('messages').add({
            name,
            email,
            massage,
            timestamp: new Date()
    });
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});


// bookings endpoint
app.post('/bookings', async (req, res) => {
    const { name, email, shotType, date, message } = req.body;

    if (!name || !email || !shotType || !date || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        await db.collection('sessions').add({
            name,
            email,
            shotType,
            date,
            message,
            timestamp: new Date()
        });

        res.status(201).json({ message: 'Booking submitted successfully' });
    } catch (error) {
        console.error('Error saving hire request:', error);
        res.status(500).json({ error: 'Failed to send hire request' });
    }  

});

// Auth endpoints
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    
    // Simple authentication logic - replace with actual auth
    if (email && password) {
      res.status(200).json({ 
        message: 'Sign in successful', 
        user: { email } 
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    
    // Simple registration logic - replace with actual implementation
    if (email && password) {
      res.status(201).json({ 
        message: 'Account created successfully', 
        user: { email } 
      });
    } else {
      res.status(400).json({ message: 'Invalid input' });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

