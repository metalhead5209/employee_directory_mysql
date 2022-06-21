const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');



// ROUTES
router.get('/', empController.all)

router.post('/', empController.search)

router.get('/new', empController.new)

router.post('/new', empController.create)



  module.exports = router;