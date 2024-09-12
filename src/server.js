require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const emailRoutes = require('./routes/emailRoutes')
const githubRoutes = require('./routes/githubRoutes')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/', emailRoutes)
app.use('/', githubRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})