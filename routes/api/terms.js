const express = require('express');
const { readTerms, createTerms, upsertTerms, deleteTerms } = require('../../data/terms');
const router = express.Router();

router.get('/', (req, res) => {
    readTerms().then(data => {
        res.send(data)
    })
})

router.post('/', (req, res) => {
    const body = req.body
    createTerms(body).then(data => {
        res.send(data)
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    upsertTerms(id, body).then(data =>  res.send(data));
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    deleteTerms(id).then(data => res.send(data));
})

module.exports = router;
