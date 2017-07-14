const router = require("express").Router();
const { Student } = require("../db/models");

module.exports = router;

// GET api/student
router.get("/", function(req, res, next) {
  Student.findAll().then(students => res.json(students)).catch(next);
});

// POST /api/student
router.post("/", function(req, res, next) {
  console.log("post, ", req.body);

    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);

});

// PUT /api/student
router.put("/:studentId", function(req, res, next) {
  const campusId = req.params.studentId; 

  console.log("put ", studentId, req.body)

  Student.findById(studentId).then(student => student.update(req.body))
  .then(() => res.status(204).end())
  .catch(next);

});

// DELETE /api/student
router.delete("/:studentId", function(req, res, next) {
  const id = req.params.studentId;

  //console.log("delete ", id )

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
