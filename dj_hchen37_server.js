//importing all modules and packages needed

const express = require('express');
const app = express();
const path = require("path");
const djRoutes = require('./routes/djRoute.js');
const manRoute = require("./routes/managerRoute.js");
const prodRoute = require("./routes/producerRoute.js");

//Configuring to ejs template engine and routing the js and css files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//Routing between the different pages.
//app.use('/', djRoutes);
//app.use('/dj_hchen37.html', djRoutes);
app.use('/manager_anguy38.html', manRoute);
app.use('/producer_fndiaye.html', prodRoute);

app.get('/', (req, res)=>{
	res.render("dj_hchen37.ejs", {newRadioName: "Crime Chronicles Radio", newTitle: "Updated!"});
});

app.get('/dj_hchen37.html', (req, res)=>{
	res.render("dj_hchen37.ejs", {newRadioName: "Crime Chronicles Radio", newTitle: "Updated!"});
});

//Running the port
app.listen(8080, () => {
	console.log(`Server is running on port 8080`);
});