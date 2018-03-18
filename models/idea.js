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
  colour: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Idea = (module.exports = mongoose.model("Idea", IdeaSchema));

module.exports.getBySessionId = function(sessionId, callback) {
  Idea.find({ sessionId: sessionId })
    .sort({ score: -1 })
    .exec(callback);
};

module.exports.getByIdeaId = function(ideaId, callback) {
  Idea.findById(ideaId, callback);
};

module.exports.addIdea = function(idea, callback) {
  console.log(idea);
  idea.save(callback);
};

module.exports.addScore = function(ideaId, value, callback) {
  Idea.findByIdAndUpdate(ideaId, { $inc: { score: value } }, callback);
};
