const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const router     = require('./routes/');

app.use(bodyParser.json());

app.use('/', router );

app.listen(3000, function () {
   console.log("Server running in port 3000 !");
});

