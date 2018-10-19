const express = require('express');
const bodyParser = require('body-parser');
const cat = require('./src/routes/cats.routes');

const app = express();

//mongoose connection
const mongoose = require('mongoose');
let dev_db_url = require("./src/config").mongoURI;
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/cats', cat);
//port
let port = 3001;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
