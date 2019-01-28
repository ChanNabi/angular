var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var Employees = mongoose.model('Employees');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Employees.find({}, function(err, emps) {
    var userMap = [];
    emps.forEach(function(user) {
      userMap.push(user);
    });
  
    res.send(userMap);  
  });
});


module.exports = router;
