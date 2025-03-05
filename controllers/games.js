const fs = require('fs')
const { getAllGames, getUniqueGame, inputGame, updateGame, deleteGame } = require("../services/games")

const getGames = (req, res) => {
    try{
        res.send(getAllGames())    
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getGamesById = (req, res) => {

    const id = req.params.id
    try{
        res.send(getUniqueGame(id))    
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const setGames = (req, res) => {
    try{
        const newGame = req.body
        res.send(inputGame(newGame))
        res.status(201)
        res.send("Produto inserido com sucesso!")

    } catch(err){
        res.status(500)
        res.send(err)
    }
}

const patchGames = (req, res) => {
    
    try{
        const id = req.params.id
        const body = req.body
        updateGame(id, body)
        res.send("Produto Atualizado")
    } catch (err){
        res.status(500)
        res.send(err)
    }
       
}


const removeGame = (req, res) => {
    
    try{
        const id = req.params.id
        deleteGame(id)        
        res.send("Produto removido com sucesso!")
    } catch (err){
        res.status(500)
        res.send(err)
    }
    
    
}


module.exports = {
    getGames, getGamesById, setGames, patchGames, removeGame
}