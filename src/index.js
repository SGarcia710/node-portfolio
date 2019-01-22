const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //esto procesara todo el html a ejs
app.set('view engine', 'ejs'); //esto habilita usar .ejs en lugar de .html

// middlewares


// routes
app.use(require('./routes/index'));

// statics files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'));
});