const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const { cli } = require('./controllers/cli')
const imageRoutes = require('./routes/images');

mongoose
    .connect(process.env.MONGO_DEV, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => true)
    .catch(err => {
        console.log(err);
    });

//views
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'downloads')));

app.use('/', imageRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  cli.launchCLI();
})