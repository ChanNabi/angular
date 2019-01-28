var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employees = new Schema({
    emp_id : Number,
    firstname : String,
    lastname  : String
});

mongoose.model('Employees', Employees, 'Employees');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost:27017/employee_db', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect Database Success..');
    }
});
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));