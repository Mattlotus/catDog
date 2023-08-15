const express = require('express')
const app = express()


PORT = 3000


const mongoose = require('mongoose')
const Cats = require("./models/cats.js")
const Dogs = require("./models/dogs.js")


// ...........MiddleWare..........

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())



// app.use(express.urlencoded({ extended: false}))

app.use((req,res,next)=>{
    console.log('running all routes')
    next()
});



// .............ROUTES...........
app.get('/', (req,res)=>{
    res.send('hola')
})

app.get('/cats',(req,res)=>{
    res.render('dogs')
})
app.get('/cats/seeds', async (req,res)=>{
    await cats.deleteMany({})


    await cats.create(cats)

})
app.get('.cats/Show',(req,res))


app.get('/dogs',(req,res)=>{
    res.render('cats')

})







// ......Listening stays on botton
app.listen(PORT , ()=>{
    console.log('Listening on 3k Radio')
})