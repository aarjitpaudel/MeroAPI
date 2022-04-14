var router = require('express').Router();
const useless = require('./data/useless.json')

router.get('/useless', (req, res) => {
	res.json(useless);
});

module.exports = router;