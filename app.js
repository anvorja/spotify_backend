require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectionDb = require('./config/mongo')
const app = express()

// Esto permite que el servidor responda a solicitudes HTTP desde diferentes dominios.
// función que tiene acceso tanto al objeto de solicitud (request) como al objeto de respuesta (response)
app.use(cors())

const port = process.env.PORT || 3000

connectionDb().then(() => {})

app.listen(port, () => {
    console.log(`Server running on port ${port} -> http://localhost:${port}`)})


