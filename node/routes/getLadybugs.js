const express = require("express");
const router = express.Router();

const ladybugs = require("../data/ladybugs.json")

router.get("/", function (req, res) {
    res.send(ladybugs)
});

module.exports = router;
