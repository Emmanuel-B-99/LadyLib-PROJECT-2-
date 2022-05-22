const express = require("express");
const router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hey NYC people! I recently just moved to NYC from San-Fran, if anyone here likes Fútbol and wants to play with me feel free to call me at 1-234-567-8900.😃",
    user: "Cristiano Ronaldo",
    added: new Date(),
  },
  {
    text: "This is the best city in the world, representing Brooklyn since '76!🗽",
    user: "John Doe",
    added: new Date(),
  },
  {
    text: "Anyone know any good pastry spots around Midtown? Any recommendations are appreciated.🍔🍕🍟",
    user: "Sarah Perez",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "NYC Messageboard", messages: messages, format: distanceInWords });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form");
});
router.get("/homes", function (req, res, next) {
  res.render("home");
});
router.get("/pics", function (req, res, next) {
  res.render("pic");
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
