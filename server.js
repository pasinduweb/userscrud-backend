const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const port = 3001;
const host = '127.0.0.1';

app.use(cors());
app.use(express.json());

const uri =
    'mongodb+srv://adminpj:adminpj00@cluster0.9dv03lj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Error ', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Server is listening to ${server.address().port}`);
});

app.use('/api', router); // domain/api/

// loopback address
// nodemon
