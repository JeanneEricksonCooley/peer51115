var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    studentName: {type: String, required: true},
    score: {type: Number, required: true},
    date_completed: {type: Date, required: true}
});

module.exports = mongoose.model('student', assignmentSchema);