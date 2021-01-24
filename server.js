const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const { cli } = require('./controllers/cli')
const { displayImages } = require('./controllers/views')

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

app.get('/:folder', (req, res) => {
  res.send(displayImages(req.params.folder))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  cli.launchCLI();
   process.on('uncaughtException', function(err) {
      console.log('Caught exception: ' + err);
      cli.launchCLI();
   });
})