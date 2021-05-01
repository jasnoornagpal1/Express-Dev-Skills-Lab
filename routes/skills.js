var express = require('express');
var router = express.Router();
//let mySkillsImports = require('../models/skills.js')
const skillsCtrl = require('../controllers/skills')

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.post('/', skillsCtrl.create);
router.get('/:id', skillsCtrl.show);


module.exports = router;


