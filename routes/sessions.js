const express = require("express");
const router = express.Router();

// Post
router.post("/start", (req, res, next) => {
  console.log(req);
  let newSession = new Session({
    title: req.body.title,
    state: "active",
    date: Date.now()
  });

  Session.addStory(newSession, (err, session) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to add session"
      });
    } else
      res.json({
        success: true,
        msg: "New session added",
        session: session
      });
  });
});

module.exports = router;
