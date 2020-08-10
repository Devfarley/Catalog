const express = require('express');
const { readTerms } = require('../../data/terms');
const router = express.Router();

router.get('/', (req, res) => {
    readTerms().then(data => {
        res.send(data)
    })
})

module.exports = router;
