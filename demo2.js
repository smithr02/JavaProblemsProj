"use strict";


function helloWorld(){
	console.log("Hello world!");
	alert("Hello world!");

	let response = prompt("Hello what?");
	if(response === "world"){
		document.getElementById("demoDiv").innerHTML = "Hey there!"
	}
	else if (response === "there"){
		document.getElementById("demoDiv").style.display = "none";
	}

}

function addTen(){
	let response = parseInt(prompt("What number do you want to add Ten to?"));
	let sum = 10 + response;
	document.getElementById("demoDiv").innerHTML = sum;

}

function tester(){

	let name = "Brett";
	console.log(name);
	name = 500;
	console.log(name);

}