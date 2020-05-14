const app = require('express')()
const basicAuth = require('express-basic-auth')
 
app.get('/', (req, res) => {
  res.json(users)
})

app.use(basicAuth({
  users: { 
    'Thanaset': 'thanaset',
    'Fatman' : 'fatfat'
  }
}))


app.listen(9000, () => {
  console.log('Application is running on port 9000')
})