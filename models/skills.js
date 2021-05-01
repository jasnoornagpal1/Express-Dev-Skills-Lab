const skills = [
    {id: 0, skill: 'HTML5', done: true},
    {id: 1, skill: 'CSS', done: true},
    {id: 2, skill: 'JavaScript', done: true},
    {id: 3, skill: 'Express', done: true},
    {id: 4, skill: 'Python', done: true}
];

module.exports = {
    getAll,
    getOne,
    createNew,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function createNew(skill) {
    let addNew = {}
    addNew.id = Date.now() % 100000;
    addNew.done = false;
    addNew.skill = skill;
    skills.push(addNew);

}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}
