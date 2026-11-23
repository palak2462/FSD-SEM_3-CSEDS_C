const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Home route
app.get('/', (req, res) => {

    fs.readFile(path.join(__dirname, 'pages', 'home.html'), 'utf8', (err, data) => {

        if (err) {
            return res.status(500).send("Error reading HTML file");
        }

        res.send(data);
    });

});

// About route
app.get('/about', (req, res) => {

    fs.readFile(path.join(__dirname, 'pages', 'about.html'), 'utf8', (err, data) => {

        if (err) {
            return res.status(500).send("Error reading HTML file");
        }

        res.send(data);
    });

});

// Contact route
app.get('/contact', (req, res) => {

    fs.readFile(path.join(__dirname, 'pages', 'contact.html'), 'utf8', (err, data) => {

        if (err) {
            return res.status(500).send("Error reading HTML file");
        }

        res.send(data);
    });

});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});