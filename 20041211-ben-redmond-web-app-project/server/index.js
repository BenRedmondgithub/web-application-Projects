const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use( express.json())

const serviceAccount = require('./serviceAccount.json');
const { tr } = require('date-fns/locale');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

});

const db = admin.firestore();

app.post('/contact', async (req, res) => {
    const { name, email, massage } = req.body;

    if (!name || !email || !massage) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    constemailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        await db.collection('contact').add({
            return res.status(201).json({ message: 'Message sent successfully' });
        }

        tr

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

