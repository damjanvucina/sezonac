const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const ads = require('./routes/ads');
const register = require('./routes/register');
const login = require('./routes/login');
const logout = require('./routes/logout');

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('greska ' + err));

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/oglasi', ads);
app.use('/prijava', login);
app.use('/odjava', logout);
app.use('/registracija', register);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever running on port ${port}`));