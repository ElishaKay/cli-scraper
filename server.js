const path = require('path');
const { cli } = require('./controllers/cli');
const { displayImages } = require('./controllers/views');

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
})