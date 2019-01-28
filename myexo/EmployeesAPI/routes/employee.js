var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var Employees = mongoose.model('Employees');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  Employees.findOne({emp_id : req.params.id},function (err, emp) {
    res.send(emp);
  })
});

router.post('/', function(req, res, next) {

    if(req.body == undefined){

      res.json({'Code':'50000'});

    } else {

      Employees.find({}, function(err, emps) {
        var emp_id_count = 0;
        if(emps.length != 0){
          emp_id_count = emps[emps.length - 1].emp_id;
        }
         
        var emp = new Employees;
        emp.emp_id = emp_id_count + 1
        emp.firstname = req.body.firstname
        emp.lastname = req.body.lastname
    
        emp.save(function (err, emp, count) {
          if (err) return next(err);
        });
        res.json(emp);

      });
    }
});

router.put('/:id', function(req, res, next) {
  Employees.findOne({emp_id : req.params.id},function (err, emp) {
    if(req.body == undefined){
      res.json({'Code':'50000'});
    } else {
      var keys = Object.keys(req.body);
      for(var i=0;i<keys.length;i++){
        var key = keys[i];
        emp[key] = req.body[key]
      }
      emp.save(function (err, emp, count) {
        if (err) return next(err);
      });

      res.json(emp);
    }

  })
});

router.delete('/:id', function(req, res, next) {
  Employees.findOneAndRemove({emp_id : req.params.id},function (err,emp) {
    console.log(emp)
    if(err) { throw err; }

    if(emp === null){
      res.json({"Code":"50000"})
    } else {
      res.json({"Code":"20000"})
    }
    
  })
});

module.exports = router;
