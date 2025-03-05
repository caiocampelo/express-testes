const { getAllFavorites,deleteFavorite, addFavoriteById} = require("../services/favoritos")

const getFavorites = (req, res) => {
    try{
        res.send(getAllFavorites())    
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const postFavorite = (req, res) => {
    try{
        const id = req.params.id
        if (!id) {
            return  res.status(400).send("O parâmetro id é obrigatório")            
        }
        addFavoriteById(id)
        res.status(201).send('Game adicionado a o favorito com sucesso!')

    } catch(err){
        res.status(500).send(err)
    }
}


const removeFavorite = (req, res) => {
    
    try{
        const id = req.params.id
        if (!id) {
            return res.status(400).send("O parâmentro id é obrigatório")
        }
        deleteFavorite(id)        
        res.send("Game removido dos favoritos com sucesso!")
    } catch (err){
        res.status(500).send(err)
    }   
}



module.exports = {
    getFavorites,
    postFavorite,
    removeFavorite
}