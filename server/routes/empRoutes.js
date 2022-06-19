const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');



// ROUTES
router.get('/', empController.all)

// router.post('/', empController.search)
  


  module.exports = router;