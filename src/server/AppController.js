const AppController = {

  getAttractions(req, res, next, dbClient) {
    console.log('*** HIT 1 ***')
     dbClient.query('SELECT * from attractions', function (err, result) {
      console.log('*** HIT 2, RESULTS:',result)
      if (err) console.log(err);
      res.json(result.rows);
    })
  }

}

module.exports = AppController;

  // // Create a new student in the Database
  // // Their information will be sent in the request body
  // // This should send the created student
  // createStudent(req, res) {
  //   let newStudent = new Student({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     age: req.body.age
  //   })
  //   newStudent.save((err) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(418);
  //     } else {
  //       return newStudent;
  //     }
  //   })
  // },

  // // Get a student from the database and send it in the response
  // // Their first name will be in the request parameter 'name'
  // // This should send the found student
  // getStudent(req, res) {
  //   res.body = Student.find({
  //     firstName: req.params.name
  //   })
  // }