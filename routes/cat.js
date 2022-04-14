var router = require('express').Router();
const cat = require('./data/cat.json')

router.get('/cat', (req, res) => {
	res.json(cat);
});

module.exports = router;