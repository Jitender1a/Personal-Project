const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')
    , server = require('./server')
    , session = require('express-session')
    , AuthCtrl = require('./Auth')
    
    require('dotenv').config()
    const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
  }))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

//middleware
app.use( express.static( `${__dirname}/../build` ) );

app.get('/api/products', controller.getProducts)

app.get('/api/cart', controller.getCart)
//getitem 
app.get('/api/products/:id',controller.item)
app.post('/api/cart/:id', controller.addToCart)
app.put('/api/cart/:id', controller.updateQuantity)
app.delete('/api/cart/checkout', controller.checkout)
app.delete('/api/cart/:id', controller.deleteItem)

// server 
app.post('/api/charge', server.Credit)

//Auth.js
app.post('/auth/login', AuthCtrl.login)
app.post('/auth/register', AuthCtrl.register)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.getCurrentUser)

app.listen(SERVER_PORT, () => console.log(' nodemon is connected', SERVER_PORT))
 