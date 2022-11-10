var express = require('express');
const university = require('../controllers/university');
var router = express.Router();

/* GET home page. */
router.get('/', university.university_list);

module.exports = router;