const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.log(err);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})