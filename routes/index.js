var router = require('express').Router();

router.get('/', (req, res) => {
    res.json(
		{
			"Creator": "Aarjit Paudel",
			"Protfolio": "https://aarjit.com",
			"APIs": {
				"Main": "https://meroapi.aarjitpaudel.repl.co",
				"NEPSE data": "https://meroapi.aarjitpaudel.repl.co/nepse",
				"Cat fact": "https://meroapi.aarjitpaudel.repl.co/cat",
				"Dog fact": "https://meroapi.aarjitpaudel.repl.co/dog",
				"Useless fact": "https://meroapi.aarjitpaudel.repl.co/useless",
				"Current Date": "https://meroapi.aarjitpaudel.repl.co/date",
			}
		}
	);
});

module.exports = router;