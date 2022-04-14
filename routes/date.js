var router = require('express').Router();

router.get("/date", (req, res) => {
  let date = new Date();
  res.json(
	  {
  		"date": date.getDate(),
  		"month": date.getMonth(),
  		"year": date.getFullYear(),
	}
  );
});

module.exports = router;