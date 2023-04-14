const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials' );

app.use( express.static( 'public') );



app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'victorio',
        titulo: 'curso de node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre : 'victorio',
        titulo: 'curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre : 'victorio',
        titulo: 'curso de node'
    })
});

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})