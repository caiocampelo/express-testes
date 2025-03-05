const fs = require('fs')
const { json } = require('stream/consumers')

// funcao get -- retorna todos os games da base Json
const getAllFavorites = () => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    return games
}

const deleteFavorite = (id) => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    const filteredGames = games.filter(game => game.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(filteredGames))
}


const addFavorite = (game) => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    const setNewGame = [...games, game]
    fs.writeFileSync('favoritos.json', JSON.stringify(setNewGame))
}





module.exports = {
    getAllFavorites,
    deleteFavorite,
    addFavorite
}
