const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
admin.firestore().settings({
    timestampsInSnapshots: true,

const db = admin.firestore();

app.post('/contact', async (req, res) => {
    const { name, email, massage } = req.body;

    if (!name || !email || !massage) {
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

