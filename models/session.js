const mongoose = require("mongoose");

// Session Schema
const SessionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Session = (module.exports = mongoose.model("Session", SessionSchema));

module.exports.addSession = function(session, callback) {
  session.save(callback);
};

module.exports.getById = function(sessionId, callback) {
  Session.findById(sessionId, callback);
};

module.exports.getByCollectionOfIds = function (ids, callback) {
  Session.find({
    _id : {
      $in: ids
    }
  }, callback);
}
