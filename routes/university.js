var express = require('express');
const university = require('../controllers/university');
var router = express.Router();

/* GET home page. */
router.get('/', university.university_view_all_Page);

module.exports = router;