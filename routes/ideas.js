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

router.get("/get", (req, res, next) => {
  let sessionId = req.headers.sessionid;
  Idea.getBySessionId(sessionId, (err, ideas) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load ideas." });
    } else {
      res.json({ success: true, ideas: ideas });
    }
  });
});

router.post("/addScore", (req, res, next) => {
  const score = req.body.score;
  if (score.direction == 'up')
  {
    Idea.increaseScore(score.ideaId, (err, res) => {
      if (err) console.log(err);
      if (res) {
        Idea.getBySessionId(score.sessionId, (err, ideas) => {
          console.log(err, ideas);
          if (err) res.json({ success: false, msg: "Failed to load ideas." });
          else res.json({ success: true, ideas: ideas });
        });
      }
    });
  }
});

module.exports = router;
