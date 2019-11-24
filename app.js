const express = require('express')
const path = require('path')
require('dotenv').config()


const db = require('./utils/db')

const config = require('./config/index.js')

const route = require('./src/routes')
const logger = require('./config/logger')

const app = express()

// Parse the payload and add to request.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', route)

// Handle the error
app.listen(5001)

db.connect(config.dbUrl)

app.listen(config.port)

logger.log(`Listening @ port ${config.port}`)


