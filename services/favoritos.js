const fs = require('fs')
const { json } = require('stream/consumers')

// funcao get -- retorna todos os games da base Json
const getAllFavorites = (req, res) => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    return games
}

const deleteFavorite = (id) => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    const filteredGames = games.filter(game => game.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(filteredGames))
}

module.exports = {
    getAllFavorites,
    deleteFavorite
}
