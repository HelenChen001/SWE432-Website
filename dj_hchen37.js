window.onload = function(){
	console.log("Window.onload: Page as fully loaded!");

	setTimeout(function (){
		console.log("Delayed Message for 2 sections");
	}, 2000);

	class podcast{
		constructor(name, videoLength, genre, host){
			this.name = name;
			this.videoLength = videoLength;
			this.genre = genre;
			this.host = host;
		}
	}
	
	let newPods = new podcast("Baking a murder episode 1", "1:02:39", "Horror", "Stephanie Soo");
	let secondPods = new podcast("Bank Height gone wrong!", "2:42:39", "Comedy", "Stephanie Soo");

	console.log("The podcast's name is: " + newPods.name);
	console.log("The podcast's genre before change: " + newPods.genre);
	newPods.genre = "Comedy";
	console.log("The podcast's genre after change: " + newPods.genre);
	newPods.releaseDate = "March 7th";
	newPods.views = 1986;
	console.log("New Added Property Release Date: " + newPods.releaseDate);
	console.log("Properties of Podcasts: " + newPods.name + ", " + newPods.videoLength + ", " + newPods.genre + ", " + newPods.host + ", " + newPods.releaseDate);
	if(newPods.views >= 1000){
		console.log(newPods.name + " is very popular with " + newPods.views + " views!");
	}
	if(newPods.genre != "Romance"){
		console.log(newPods.name + " is not in the romance genre.");
	}
	if(newPods.genre == secondPods.genre && newPods.host == secondPods.host){
		console.log("Both " + newPods.name + " and " + secondPods.name + " have the same genre and host");
	}


}

document.addEventListener("DOMContentLoaded", function(){
	let leftButtons = document.querySelectorAll(".playlistBtn");
	let new_button = document.getElementById("newButton");
	let remove_new_button = document.getElementById("removeButton");
	let rightBar = document.getElementById("rightBar");
	applyFont(rightBar, "Arial, Helvetica, sans-serif");

	leftButtons.forEach(function(btn){
		btn.addEventListener("click", function(){
			alert("A button on the left aside has been clicked!");
		});
	});

	new_button.addEventListener("click", function(){
		addNewButton();
	});

	function addNewButton(){
		let leftBar = document.getElementById("leftBar");
		let createNewButton = document.createElement("button");

		createNewButton.innerText = "New Button";
		createNewButton.id = "tempButton";
		createNewButton.style.backgroundColor = "#d80032";
		createNewButton.style.color = "white";
		createNewButton.style.padding = "10px";
		createNewButton.style.textAlign = "center";
		createNewButton.style.fontFamily = "Arial, Helvetica, sans-serif"
		createNewButton.style.border = "1px solid #d80032";
		createNewButton.style.boxSizing = "border-box";
		createNewButton.style.width = "100%";
		createNewButton.style.cursor = "pointer";
		createNewButton.style.marginBottom = "20px";
		createNewButton.style.borderRadius = "5px";

		leftBar.appendChild(createNewButton);

	}

	remove_new_button.addEventListener("click", function(){
		removeNewButton();
	});

	function removeNewButton(){
		let tempButton = document.getElementById("tempButton");
		if(tempButton){
			tempButton.parentNode.removeChild(tempButton);
		}
		else{
			alert("No buttons could be found.");
		}
	}

	document.getElementById("myForm").addEventListener("submit", function(event) {
		if (!validateForm()) {
			event.preventDefault();
		}
	});

	document.getElementById("formSelectAll").addEventListener("click", function() {

		let c_boxes = document.querySelectorAll('input[id="timeSlot"]');
		
		// Check all checkboxes
		c_boxes.forEach(function(checkbox) {
			checkbox.checked = true;
		});
	
		alert("Select All Button was clicked!");
	});

	function validateForm(){
		let c_boxes = document.querySelectorAll('input[id="timeSlot"]');
		let bool_check = false;
		check_array = Array.from(c_boxes);

		for(let i = 0; i < check_array.length; i++){
			if(check_array[i].checked){
				bool_check = true;
				break;
			}
		}

		if(bool_check == false){
			alert("Please select at least 1 checkbox before submitting!");
			return false;
		}
		else{
			alert("Form has been submitted!");
			return true;
		}
	}

	document.getElementById("searchInput").addEventListener("keydown", function(event){

		if(event.key === "Enter"){
			alert("Enter has been pressed in the search bar! Searching for results!");
		}
	});

	function applyFont(obj, fontFam){
		if(obj){
			obj.style.fontFamily = fontFam;

			for(let i = 0; i < obj.children.length; i++){
				applyFont(obj.children[i], fontFam);
			}
		}
	}
});
