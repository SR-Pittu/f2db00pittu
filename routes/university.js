var express = require('express');
const university = require('../controllers/university');
var router = express.Router();


const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', university.university_view_all_Page);
router.get('/detail', university.university_view_one_Page);
router.get('/create', secured, university.university_create_Page);
router.get('/update', secured, university.university_update_Page);
router.get('/delete', secured, university.university_delete_Page);


module.exports = router;