const express = require('express');
const router = express.Router();

const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryId', (req, res) => {
    const requstedCountryId = req.params.countryId;
    const countries = data.countries.filter(countryIndata =>{
        if(countryIndata.id.toString() === requstedCountryId){
            return countryIndata;
        }       

    });
    res.status(200).json(countries);
});

module.exports = router;