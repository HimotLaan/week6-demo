const express = require('express');
const router = express.Router();
const data = require('../data/books.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:bookId', (req, res) => {
    const requstedBookId = req.params.bookId;
    const book = data.books.filter(bookIndata =>{
        if(bookIndata.id.toString() === requstedBookId){
            return bookIndata;
        }       

    });
    res.status(200).json(book);
});

module.exports = router;
