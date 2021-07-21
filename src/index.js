const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config({ path: './env/.env' })

const bcryptjs = require('bcryptjs')

const sessions = require('express-session')
app.use(sessions({
    secret: '123fds',
    resave: true,
    saveUninitialized: true
}))
//Connection
const db = require('./database')

app.listen(3001, (req, res) => {
    console.log(`Server on port http://localhost:3001`)
})