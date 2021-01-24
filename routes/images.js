const express = require('express');
const router = express.Router();

const { displayImages } = require('../controllers/images')

router.get('/:folder', displayImages)

// router.post('/tag', create);
// router.get('/tags', list);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);

module.exports = router; 
