var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


module.exports = {
    create: function(req, res, next) {
        var appointment = new Appointment(req.body);
        appointment.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    readAll: function(req, res, next) {
        Appointment.find({},function(err, appointments) {
            res.json(appointments);
        });
    },
    delete: function(req, res, next) {
        Appointment.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
                res.json(false);
            }else {
                res.json(true);
            }
        });
    },


}
