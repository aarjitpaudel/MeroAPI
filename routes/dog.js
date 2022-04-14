var router = require('express').Router();
const dog = require('./data/dog.json')

router.get('/dog', (req, res) => {
	res.json(dog);
});

module.exports = router;