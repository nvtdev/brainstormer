const mongoose = require("mongoose");

// Idea Schema
const IdeaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  sessionId: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Idea = (module.exports = mongoose.model("Idea", IdeaSchema));

module.exports.addIdea = function(idea, callback) {
  console.log(idea);
  idea.save(callback);
};

module.exports.getBySessionId = function(sessionId, callback) {
  Idea.find(
    {
      sessionId: sessionId
    },
    callback
  );
};
