//connect to postgres
const pg = require('pg');
const config = {
  user: 'traveler',
  password: 'tester',
  database: 'soloapp'
};
var myClient;
let pool = new pg.Pool(config);
pool.connect(function (err, client, done) {
  if (err) console.log("Can't connect to DB" + err);
  myClient = client;
  console.log('successfully connected to DB')
})
const ClientFactory = () => {
  return myClient;
}
  // client.query('SELECT * FROM attractions', function (err, result) {
  //   done();
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log('CONNECTED TO DB',result.rows);
  // })
//export the client, not the connection/.connect, which only runs once
module.exports = ClientFactory;

// app.get('/', (req, res, next) => {
//   pool.connect(function (err, client, done) {
//     if (err) console.log("Can't connect to DB" + err);
//     client.query('SELECT * FROM attractions', function (err, result) {
//       done();
//       if (err) {
//         console.log(err);
//         res.status(400).send(err);
//       }
//       res.status(200).send(result.rows);
//     })
//   })
// });

// var connection = pool.connect(function (err, client, done) {
//   if (err) console.log('cannot connect to db:' + err);
//   app.listen(8080, function () {
//     console.log('listening on 8080');
//   });
//   myClient = client;
//   client.query('SELECT * from attractions', function (err, result) {
//     if (err) {
//       console.log(err); res.status(400).send(err);
//     }
//     console.log(result.rows);
//     res.status(200).send(result.rows);
//   })
// })