const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req,res) => {
	res.sendFile(path.join(__dirname, "/views/dj_hchen37.html"));
});


app.listen(8080, () => {
	console.log(`Server is running on port 8080`);
});