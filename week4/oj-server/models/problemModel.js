var mongoose = require("mongoose");
var problemSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});

var problemModel = mongoose.model("ProblemModel", problemSchema);

module.exports = problemModel;