const db = require('./db/');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');
const Bluebird = require('bluebird');

const campuses = [{
  name: 'The Light Side Academy',
  image: '/server/images/1.jpg'
}, {
  name: 'The Dark Side Academy',
  image: '/server/images/2.jpg'
}, {
  name: 'Newbie Jedi Academy',
  image: '/server/images/3.jpg'
}, {
  name: 'Sith Apprentice Academy',
  image: '/server/images/4.jpg'
}]

const students = [
  {
    name: 'Sid Reddy',
    campus: campuses[0]
  },
  {
    name: 'Vivek Reddy',
    campus: campuses[1]
  },
  {
    name: 'All Reddy',
    campus: campuses[2]
  },
    {
    name: 'Master Reddy',
    campus: campuses[3]
  }
]




db.sync({force: true})
  .then(() => {
    return Bluebird.map(students, student => {
      return Student.create(student,
      {
        include : [Campus]
      })
    })
  })
  .then(function () {
        console.log("Finished inserting data");
  })
  .catch(function (err) {
      console.error('There was totally a problem', err, err.stack);
  })
  .finally(function () {
      db.close()
      console.log('connection closed');
      return null;
  });
