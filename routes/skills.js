var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);
router.get('/:id', skillsCtrl.show);


module.exports = router;


