const express = require('express');
const cors = require('cors');
const admin = require('./admin');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use( express.json())

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestone();

app.get('/api/products', async (req, res) => {
    const snapshot = await db.collection('products').get();
    const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    res.json(items);

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

