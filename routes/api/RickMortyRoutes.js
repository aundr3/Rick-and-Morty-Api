const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// Characters
// localhost:3000/characters
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/characters', {
                title: 'All Characters',
                name: 'Character List',
                data
            })
        })
})

module.exports = router