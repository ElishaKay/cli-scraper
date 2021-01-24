const express = require('express');
const router = express.Router();

const { displayImages } = require('../controllers/images')

router.get('/:folder', (req, res) => {
  res.send(displayImages(req.params.folder))
})

// router.post('/tag', create);
// router.get('/tags', list);
// router.post('/blogs-of-given-tag', read);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);



module.exports = router; 
