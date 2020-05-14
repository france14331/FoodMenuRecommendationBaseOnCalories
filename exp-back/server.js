const express = require('express')
const app = express()

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'food_recommendation'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})



app.use(express.json())

const users = [{
    username: 'Thanaset',
    password: 'Thanaset'
  }]
  
  app.get('/signin', (req, res) => {
    res.json(users)
  })
  
  app.get('/signin/:username', (req, res) => {
    const { username } = req.params
    const result = users.find(user => user.username === username)
    res.json(result)
  })
  
  app.post('/signin', (req, res) => {
    const payload = req.body
    res.json(payload)
  })
  
  app.put('/signin/:username', (req, res) => {
    const { username } = req.params
    res.json({ username })
  })
  
  app.delete('/signin/:username', (req, res) => {
    const { username } = req.params
    res.json({ username })
  })

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})

connection.end()