const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());


app.get('/users', (req, res) => {
    fetch('https://api-books-ac3j.onrender.com/users')
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
});


app.get('/books', (req, res) => {
    fetch('https://api-books-ac3j.onrender.com/books')
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});