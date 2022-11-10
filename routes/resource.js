var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var university_controller = require('../controllers/university');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// UNIVERSITY ROUTES ///
// POST request for creating a University.
router.post('/universities', university_controller.university_create_post);
// DELETE request to delete University.
router.delete('/universities/:id', university_controller.university_delete);
// PUT request to update University.
router.put('/universities/:id', university_controller.university_update_put);
// GET request for one University.
router.get('/universities/:id', university_controller.university_detail);
// GET request for list of all University items.
router.get('/universities', university_controller.university_list);
module.exports = router;