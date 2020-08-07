const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const books = require('./routes/books');
const { sequelize } = require('./db/index');
const otherErrors = require('./middleware/otherErrors');
const error404 = require('./middleware/error404');

//create port number
const port = process.env.PORT || 3000;

//create app variable
const app = express();


//set up static routes
app.use('/static', express.static('public'));

//set up view engine
app.set('view engine', 'pug');

//use body-parser
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', routes);
app.use('/books', books);

//errors
app.use(otherErrors);

//404
app.use('/error404', error404);



//set up port listener and sync
sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log('The application is running on port 3000!'));
  });