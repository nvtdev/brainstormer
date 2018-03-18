const express = require("express");
const Comment = require("../models/comment");
const router = express.Router();

// Post
router.post("/add", (req, res, next) => {
  let newComment = new Comment({
    text: req.body.comment.text,
    username: req.body.comment.username,
    ideaId: req.body.comment.ideaId,
    sessionId: req.body.comment.sessionId
  });

  Comment.addComment(newComment, (err, comment) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to add comment"
      });
    } else {
      Comment.getBySessionId(newComment.sessionId, (err, comments) => {
        if (err) {
          console.log(err);
          res.json({
            success: false,
            msg: "Failed to retrieve comments"
          });
        } else {
          res.json({
            success: true,
            comments: comments
          });
        }
      });
    }
  });
});

router.get("/get", (req, res, next) => {
  let sessionId = req.headers.sessionid;
  Comment.getBySessionId(sessionId, (err, comments) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load comments." });
    } else {
      res.json({ success: true, comments: comments });
    }
  });
});

module.exports = router;
