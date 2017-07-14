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

console.log("posting  " , req.body)

  Campus.create(req.body)
    .then(channel => res.json(channel))
    .catch(next);



});

// DELETE /api/campus
router.delete('/:campusId', function (req, res, next) {
  const id = req.params.campusId;

console.log("delete ", id )

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


router.put("/:campusId", function(req, res, next) {
  const campusId = req.params.campusId; 

  console.log("put ", campusId)

  Campus.findById(campusId).then(campus => campus.update(req.body))
  .then((update2) => res.status(204).end())
  .catch(next);

});