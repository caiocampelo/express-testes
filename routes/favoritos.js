const { Router } = require('express')
const router = Router()
const { getFavorites, postFavorite, removeFavorite } = require('../controllers/favoritos')


router.get('/', getFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', removeFavorite)

module.exports = router

