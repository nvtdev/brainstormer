const express = require("express");
const Idea = require("../models/idea");
const router = express.Router();

// Post
router.post("/add", (req, res, next) => {
  let newIdea = new Idea({
    title: req.body.idea.title,
    description: req.body.idea.description,
    username: req.body.idea.username,
    sessionId: req.body.idea.sessionId,
    score: 0
  });

  Idea.addIdea(newIdea, (err, idea) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to add idea"
      });
    } else {
      Idea.getBySessionId(newIdea.sessionId, (err, ideas) => {
        if (err) {
          console.log(err);
          res.json({
            success: false,
            msg: "Failed to retrieve ideas"
          });
        } else {
          res.json({
            success: true,
            ideas: ideas
          });
        }
      });
    }
  });
});

router.get("/getBySessionId", (req, res, next) => {
  let sessionId = req.headers.sessionId;
  Idea.getBySessionId(username, (err, ideas) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load ideas." });
    } else {
      res.json({ success: true, ideas: ideas });
    }
  });
});

module.exports = router;
