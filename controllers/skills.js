const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    newSkill,
    create,
    delete: deleteOne
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body);
    req.body.done = true;
    Skill.createNew(req.body.newSkill);
    console.log(Skill.getAll())
    res.redirect('/skills');
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        // Would like to display the number of the todo within the list
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
      });
}

function deleteOne(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
    res.send("Deleted, boy bye!")
}