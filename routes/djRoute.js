const express = require('express');
const path = require("path");
const route = express.Router();

route.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/dj_hchen37.html"));
});

module.exports = route;