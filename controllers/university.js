var university = require('../models/university');
// List of all Costumes
exports.costume_list = function(req, res) {
res.send('NOT IMPLEMENTED: university list');
};
// for a specific Costume.
exports.costume_detail = function(req, res) {
res.send('NOT IMPLEMENTED: university detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.costume_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: university create POST');
};
// Handle Costume delete form on DELETE.
exports.costume_delete = function(req, res) {
res.send('NOT IMPLEMENTED: university delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.costume_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: university update PUT' + req.params.id);
};