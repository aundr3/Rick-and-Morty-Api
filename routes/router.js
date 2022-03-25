const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
router.use(express.static('public'))

const RickMortyRoutes = require('./api/RickMortyRoutes')

router.use('/characters', RickMortyRoutes)

// home route
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Home',
                name:'Rick and Morty',
                data
            })
        })
})

router.get('*', (req, res) => {
    if(req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error = Page not found',
            name: '404 Error'
        })
    }
})

module.exports = router