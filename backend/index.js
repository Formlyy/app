const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5001;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("database connected successfully!"))
    .catch(err => console.error('connection error', err));

app.get('/api', (req, res) => {
    res.json({msg: "this route works."});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
