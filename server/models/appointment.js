var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = mongoose.Schema({
    name: { type: String },
    date: { type: String },
    time: { type: String },
    complain: { type: String }
},{ timestamps: true });

// third param overrides mongo default collection names...
var Poll = mongoose.model('Appointment', appointmentSchema, 'Appointments');
