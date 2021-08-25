const express = require('express');
const app = express();
const path = require('path');

/* Servidor */

const port = 3000;
app.listen(port, () =>{
    console.log('Servidor levantado en el puerto 3000');
});

/* set vistas estáticas */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

/* Router */

const  mainRouter = require('./routes/main');
const  usersRouter = require('./routes/users');
const  productsRouter = require('./routes/products')

/* app.uses + const Routers */

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
