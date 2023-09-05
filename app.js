const express = require('express');
const connectDB = require('./db/connect');
const app = express();

require('dotenv').config();

// app.use(express.json());

const port = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`running on ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start();