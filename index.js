const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(require('./routes/index.js'));
app.use(require('./routes/cat.js'));
app.use(require('./routes/dog.js'));
app.use(require('./routes/useless.js'));
app.use(require('./routes/nepse.js'));
app.use(require('./routes/date.js'));

const port = process.env.PORT || 3000;
app.listen(port, err => {
	if (err) return console.log(err);
	console.log('server running on port ' + port);
})