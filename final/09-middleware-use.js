const express = require('express')
const app = express()

const logger = require('../logger')
const authorize = require('../authorize')
//  req => middleware => res
// app.use([logger, authorize ]) 
 // if use multiple middlware fun in .use , we simply place arrya

app.get('/',  (req, res) => {
  res.send('Home')
})
app.get('/about',  (req, res) => {
  res.send('About')
})

app.get('/api/products',  (req, res) => {
    console.log(req.user);
    
    res.send('Product')
  })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})