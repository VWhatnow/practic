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
app.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const candidate = await User.findByPk(id)
    if(!candidate){
        return res.status(500).json({message:`Server error`})
    }
    await candidate.destroy()
    res.send(`user was deleted`)
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
