// JavaScript Document
console.log("Howdy!");

var deButton1 = document.querySelector("button:nth-of-type(1)");


deButton1.addEventListener("click", showBlokje1);


function showBlokje1() {
	
	var blokje1 = document.querySelector("li:nth-of-type(1)");
	
	blokje1.classList.add("zichtbaar");
}



var deButton2 = document.querySelector("button:nth-of-type(2)");

deButton2.addEventListener("click", showBlokje2en3);

function showBlokje2en3() {
	
	var blokje2 = document.querySelector("li:nth-of-type(2)");
	var blokje3 = document.querySelector("li:nth-of-type(3)");
	
	blokje2.classList.add("zichtbaar");
	blokje3.classList.add("zichtbaar");
}