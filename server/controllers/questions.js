let mongoose = require("mongoose");
let Question = mongoose.model("Question");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    question.find({}, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(questions);
    });
  },

  // Create a bike => sends to DB <= newly created bike
  create: function(req, res) {
    Question.create(req.body, function(err, question) {
      if (err) {
        return res.json(err);
      },

      
