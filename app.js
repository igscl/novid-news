const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = express.Router();
const { showNews } = require('./controllers/news_controller');

const port = process.env.PORT || 3010;

const app = express();
app.use(bodyParser.json());

// db connection
const dbConn = "mongodb://localhost/novid_words"

mongoose.connect(
    dbConn,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    },
    err => {
      if (err) {
        console.log("Error connecting to database", err)
      } else {
        console.log("Connected to database!")
      }
    }
  )

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

app.use('/', router);
router.get('/', showNews);

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

app.use('/', router);
router.get('/', showNews);

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

app.use('/', router);
router.get('/', showNews);

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

app.use('/', router);
router.get('/', showNews);

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

app.use('/', router);
router.get('/', showNews);

app.listen(port, () => {
    console.log(`News app listening on port ${port} HELL YEAH`);
});