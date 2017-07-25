let mongoose = require("mongoose");

// MOdel creation and validation
let QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Questiom cannot be blank"],
      minlength: [10, "Question should be at least 10 characters"]
    },

    answer: {
      type: String,
      required: [true, "Answer cannot be blank"],
      minlength: [5, "Answer should be at least 5 characters"]
    }
  },
  { timestamps: true }
);

mongoose.model("Question", QuestionSchema);
