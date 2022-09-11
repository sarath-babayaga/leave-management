const express = require('express')
const mongoose = require('mongoose')
const app = requie();

const uri = 'mongodb://localhost:27017'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(3000, () => {
    console.log("server started on port 3000");
});