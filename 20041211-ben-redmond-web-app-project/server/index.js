const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();  // Create an Express application
const port = process.env.PORT || 3000; // Set the port to 3000 or use the environment variable PORT

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()) ; // Parse JSON bodies
app.use(cookieParser()); // Add this line to use cookie-parser

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccount.json'); // Path to your Firebase service account key file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Use the service account credentials
});

const db = admin.firestore(); // Initialize Firestore database

// contact endpoint
app.post('/contact', async (req, res) => { // Validate request body
    const { name, email, message } = req.body; // Destructure the request body
    // Check if all required fields are present

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    } // Validate email format

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    } // Validate message length

    // Check if message is too short or too long
    try {
        await db.collection('messages').add({
            name,
            email,
            massage,
            timestamp: new Date()
    }); // Save the message to Firestore
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    } // Catch any errors during the process
});


// bookings endpoint
app.post('/bookings', async (req, res) => {
    const { name, email, shotType, date, message } = req.body;
    // Validate request body

    if (!name || !email || !shotType || !date || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    } // Validate email format

    try {
        await db.collection('sessions').add({
            name,
            email,
            shotType,
            date,
            message,
            timestamp: new Date()
        }); // Save the booking to Firestore

        res.status(201).json({ message: 'Booking submitted successfully' }); // Respond with success message
    } catch (error) {
        console.error('Error saving hire request:', error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to send hire request' }); // Respond with error message
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
    } // Handle sign-in requests
  });
  
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Simple registration logic - replace with actual implementation
    if (email && password) {
      res.status(201).json({ 
        message: 'Account created successfully', 
        user: { email } 
      }); // Respond with success message and user data
    } else {
      res.status(400).json({ message: 'Invalid input' });
    } // Handle login requests
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); // Start the server and listen on the specified port
// This code sets up an Express server with CORS, body parsing, and cookie parsing.

