var express = require('express');
const university = require('../controllers/university');
var router = express.Router();

/* GET home page. */
router.get('/', university.university_view_all_Page);
router.get('/detail', university.university_view_one_Page);
router.get('/create', university.university_create_Page);
router.get('/update', university.university_update_Page);

module.exports = router;