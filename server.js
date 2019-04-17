const express = require('express');
const app = express();
const mongoose = require('mongoose');

const ads = require('./routes/ads');
const categories = require('./routes/categories');
const authorization = require('./routes/authorization');

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('greska ' + err));

app.use(['/kategorije', '/'], categories);
app.use('/oglasi', ads);
app.use(['/prijava', '/registracija', '/odjava'], authorization);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever running on port ${port}`));