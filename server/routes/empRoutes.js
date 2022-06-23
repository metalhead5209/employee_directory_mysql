const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');



// ROUTES
router.get('/', empController.all)

router.post('/', empController.search)

router.get('/new', empController.new)

router.post('/new', empController.create)

router.get('/show/:id', empController.show)

router.get('/:id', empController.delete)


  module.exports = router;