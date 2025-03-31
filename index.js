const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`hello world`)
})
app.get('/fullname',(req,res)=>{
    res.send(`Влад Баргамин`)
})
app.listen(process.env.PORT || 8080, () => 
console.log(`Server start no ${process.env.PORT || 8080}`
))

