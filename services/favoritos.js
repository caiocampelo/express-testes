const fs = require('fs')
const { json } = require('stream/consumers')

// funcao get -- retorna todos os games da base Json
const getAllFavorites = () => {
    const favoriteGames = JSON.parse(fs.readFileSync("favoritos.json"))
    return favoriteGames
}

const deleteFavorite = (id) => {
    const games = JSON.parse(fs.readFileSync("favoritos.json"))
    const filteredGames = games.filter(game => game.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(filteredGames))
}


const addFavoriteById = (id) => {
    const favoriteGames = JSON.parse(fs.readFileSync("favoritos.json"))
    const games = JSON.parse(fs.readFileSync("games.js"))
    const newFavorite = games.filter(game => game.id === id)
    const setFavoriteGame = [...favoriteGames, newFavorite]
    fs.writeFileSync("favoritos.json", setFavoriteGame)

}



module.exports = {
    getAllFavorites,
    deleteFavorite,
    addFavoriteById
}
