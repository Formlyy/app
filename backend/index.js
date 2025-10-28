const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const apiRoutes = require('./routes/api-routes'); 

const app = express();
const PORT = 5001;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("database connected successfully!"))
    .catch(err => console.error('connection error', err));


app.use('/api', apiRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})