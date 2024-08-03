const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/updateuser', (req, res) => {
    // app.delete - not need as weve declared this in controller.js
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;

// npm i
// npm i express
// npm i cors -> cross-origin resource sharing -> a fundamental security mechanism implemented by web browsers to prevent unauthorized access to resources on a web page from different origin
