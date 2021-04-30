var express = require('express');
var router = express.Router();
let mySkillsImports = require('../models/skills.js')
const skillsCtrl = require('../controllers/skills')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(mySkillsImports)
  let skills = mySkillsImports.getAll()
  res.render('skills/index.ejs', { skills });
});

// router.get('/:id', function(req, res, next) {
//   let obj = getOne(req.params.id)
//   res.send("you have typed: " + req.params.id + " and the skill is: " + obj.skill);
// });

router.get('/:id', skillsCtrl.show);


module.exports = router;


