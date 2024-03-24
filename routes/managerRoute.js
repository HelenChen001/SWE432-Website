const express = require('express');
const path = require("path");
const route = express.Router();

route.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/manager_anguy38.html"));
});

module.exports = route;