const express = require('express')
const app = express()

const{products} = require('./data.js')

app.get('/',(req,res)=>{
//     res.json([
//         {
//         name:'john'
//     },
//     {
//         name :'susan'
//     }
// ])
    res.json(products)
     
})
app.listen(3000,()=>{
    console.log('server is listening on port 5000...');
    

})