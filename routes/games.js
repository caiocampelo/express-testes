const { Router } = require('express')
const router = Router()
const { getGames, getGamesById, setGames, patchGames, removeGame} = require('../controllers/games')

router.get('/', getGames)

router.get('/:id', getGamesById)

router.post('/', setGames)

router.patch('/:id', patchGames)

router.delete('/:id', removeGame )

module.exports = router