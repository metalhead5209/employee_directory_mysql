const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');



// ROUTES
router.get('/', empController.all)
  


  module.exports = router;