const skills = [
    {id: 0, skill: 'HTML5', done: true},
    {id: 1, skill: 'CSS', done: true},
    {id: 2, skill: 'JavaScript', done: true},
    {id: 3, skill: 'Express', done: true},
    {id: 4, skill: 'Python', done: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

