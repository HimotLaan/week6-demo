const express = require('express');
const router = express.Router();

const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countriesId', (req, res) => {
    const requstedCountriesId = req.params.countriesId;
    const book = data.countries.filter(countriesIndata =>{
        if(countriesIndata.id.toString() === requstedCountriesId){
            return countriesIndata;
        }       

    });
    res.status(200).json(book);
});

module.exports = router;