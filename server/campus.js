const router = require('express').Router();
const { Campus } = require('../db/models');

module.exports = router;

// GET api/campus
router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campus/:campusId
router.get('/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
    .then(channel => res.json(channel))
    .catch(next);
});


// POST /api/campus
router.post('/', function (req, res, next) {

console.log("posting  " ,req.body)
  Campus.findOrCreate({
    where: {
      name: req.body.name,
      image: req.body.image
    }
  })
    .spread(campus => {
      console.log("spread ", campus);
    })
    .then(message => {
      res.json(message);
    })
    .catch(next);


});

// DELETE /api/campus
router.delete('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
