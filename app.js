const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('Meow.');
});

module.exports = app;
