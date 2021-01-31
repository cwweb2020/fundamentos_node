

// express

const express = require ('express')
const path = require('path')
const app = express()

// settings
app.set('port', 3030)
app.set('views',path.join(__dirname, 'views' ))
app.set('view engine, ejs')

//rutas


app.use(require('./routes'))


// static files 
app.use(express.static(path.join(__dirname,'public')))


//midlewares



app.listen(app.get('port'), e=>{
    console.log('aqui escuchando');
})









































