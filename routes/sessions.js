const express = require("express");
const Session = require("../models/session");
const router = express.Router();

// Post
router.post("/start", (req, res, next) => {
  let newSession = new Session({
    title: req.body.title,
    state: "active",
    date: Date.now()
  });

  Session.addSession(newSession, (err, session) => {
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

router.get("/get", (req, res, next) => {
  let sessionId = req.headers.sessionid;
  Session.getById(sessionId, (err, session) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load session." });
    } else {
      res.json({ success: true, session: session });
    }
  });
});

router.get("/getRecentSessions", (req, res, next) => {
  let sessionIds = req.headers.sessionids.split(',');
  Session.getByCollectionOfIds(sessionIds, (err, sessions) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load sessions." });
    } else {
      res.json({ success: true, sessions: sessions });
    }
  });

});

module.exports = router;
