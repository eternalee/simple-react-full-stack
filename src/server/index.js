const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const AppController = require('./AppController');
// const ClientFactory = require('./database.js');
// const dbClient = ClientFactory();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../../'));
// app.use(express.static(path.join(__dirname, '../../public/index.html')))

const pg = require('pg');
const config = {
  user: 'traveler',
  password: 'tester',
  database: 'soloapp'
};
var dbClient;
let pool = new pg.Pool(config);
pool.connect(function (err, client, done) {
  if (err) console.log("Can't connect to DB" + err);
  dbClient = client;
  console.log('successfully connected to DB')
})


app.get('/api/getAttractions', (req, res, next) => {
  console.log('*** HIT 0 ***', dbClient)
  AppController.getAttractions(req, res, next, dbClient); 
  //invoking with dbclient connection and req/res objects
})

app.post('/api/getAttractions', (req, res, next) => {
  var results = AppController.getAttractions()
})

// const attractionRouter = express.Router();
// attractionRouter.post('/', AppController.createAttraction);
// // localhost://3000/attraction/"name"
// attractionRouter.get('/:name', AppController.getAttraction);
// app.use('/attraction', attractionRouter);
// app.listen(3000, () => console.log(`Listening on PORT`));
app.listen(8080, () => console.log(`Listening on PORT: 8080`));