const mongoose = require("mongoose");

// Comment Schema
const CommentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  ideaId: {
    type: String,
    required: true
  },
  sessionId: {
    type: String,
    required: true
  }
});

const Comment = (module.exports = mongoose.model("Comment", CommentSchema));

module.exports.addComment = function(comment, callback) {
  comment.save(callback);
};

module.exports.getBySessionId = function(sessionId, callback) {
  Comment.find({ sessionId: sessionId }, callback);
};
