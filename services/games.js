const fs = require('fs')
const { json } = require('stream/consumers')

// funcao get -- retorna todos os games da base Json
const getAllGames = (req, res) => {
    const games = JSON.parse(fs.readFileSync("games.json"))
    return games
}


//funcao get -- retorna um game especifico buscado pelo usuario atravé de um id
const getUniqueGame = (id) => {
    const games = JSON.parse(fs.readFileSync("games.json"))
    const UserSearchInput = games.filter(game => game.id === id)[0]
    return UserSearchInput
}

//funcao post -- insere um novo game na base json
const inputGame = (game) => {
    const games = JSON.parse(fs.readFileSync("games.json"))
    const updatedGames = [...games, game]
    fs.writeFileSync("games.json", JSON.stringify(updatedGames))
}


//funcao patch -- edita os dados de um game existente 
const updateGame = (id, body)  => {
    let games = JSON.parse(fs.readFileSync("games.json"))
    const index = games.findIndex(game => game.id === id)
    const filteredGame = games[index]
    const editedGame = { ...filteredGame, ...body}
    games[index] = editedGame
    fs.writeFileSync("games.json", JSON.stringify(games))
}


//funcao delete -- remove um game da base
const deleteGame = (id) => {
    const games = JSON.parse(fs.readFileSync("games.json"))
    const updatedGames = games.filter(game => game.id !== id)
    fs.writeFileSync("games.json", JSON.stringify(updatedGames))
}

module.exports = {getAllGames, getUniqueGame, inputGame, updateGame, deleteGame}