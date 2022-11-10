var university = require('../models/university');
// List of all Costumes
exports.university_list = function(req, res) {
res.send('NOT IMPLEMENTED: university list');
};
// for a specific Costume.
exports.university_detail = function(req, res) {
res.send('NOT IMPLEMENTED: university detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.university_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: university create POST');
};
// Handle Costume delete form on DELETE.
exports.university_delete = function(req, res) {
res.send('NOT IMPLEMENTED: university delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.university_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: university update PUT' + req.params.id);
};