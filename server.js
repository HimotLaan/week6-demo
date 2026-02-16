const express = require('express');
const port = 3000;
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    //res.send('<h1>Welcome to the Express Server! /</h1>');
    //res.sendStatus(500);
    //res.status(500).json({message: "Internal Server Error"});
    //res.download('server.js');
    res.render('index');
});

app.use('/books', booksRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});