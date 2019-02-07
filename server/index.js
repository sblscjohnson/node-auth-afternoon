const express = require('express')
const session = require('express-session')
require('dotenv').config()
const massive = require('massive')
const bodyParser = require('body-parser')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db',db)
  console.log('gang gang db')
})
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))



const PORT = 4000

app.listen(() => {
  console.log(`${PORT} finna be lit`)
})