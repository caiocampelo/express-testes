const express = require('express')
const app = express()
const rotaGames = require('./routes/games')
const cors = require('cors')

app.use(express.json())
app.use(cors({origin:"*"}))


app.use('/games', rotaGames)




app.listen(8081, () => console.log("servidor conectado com sucesso!"))