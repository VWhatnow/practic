const express = require('express')
const PORT = 8080
const sequelize = require('./db')
const models = require('./model')
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`hello world`)
})
app.get('/fullname',(req,res)=>{
    res.send(`Влад Баргамин`)
})
app.post('/',async(req,res)=>{
    const {login,password} = req.body
    await User.create({login,password})
})
async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT || 8080, () => console.log(`Server start no ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()
