const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use( express.json())

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.get('/api/products', async (req, res) => {
    try {
        const snapshot = await db.collection('products').get();
        const items = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

