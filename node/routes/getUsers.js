const express = require("express");
const router = express.Router();

const users = require("../data/users.json")

router.get("/", function (req, res) {
    res.send(users);
});

module.exports = router;
