const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Հաջողությամբ կապ հաստատվեց MongoDB-ի հետ'))
    .catch(err => console.log('Կապի սխալ:', err));

// Ձեր route-երը (POST, PUT, DELETE, GET)
app.post('/products', async (req, res) => { /* ... */ });
app.put('/products/:id', async (req, res) => { /* ... */ });
app.delete('/products/:id', async (req, res) => { /* ... */ });
app.get('/products', async (req, res) => { /* ... */ });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Սերվերը աշխատում է ${port} պորտի վրա`);
});