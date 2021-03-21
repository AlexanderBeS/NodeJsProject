const http = require('http');

const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);

const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use('/petya', (req, res, next) => {
    res.send('<h1>Hello petya</h1>');
})

app.use('/vasya', (req, res, next) => {
    res.send('<h1>Hello vasya</h1>');
})

app.use(((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
}))












server.listen(3000);