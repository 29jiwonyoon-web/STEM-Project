function uploadFile(){

let fileInput = document.getElementById("fileUpload");

let status = document.getElementById("uploadStatus");

if(fileInput.files.length === 0){

status.innerText = "Please select a file.";

}

else{

status.innerText = "File uploaded locally (demo).";

}

}

function launchGame(){

let number = Math.floor(Math.random()*5)+1;

let guess = prompt("Guess a number between 1 and 5");

let output = document.getElementById("gameOutput");

if(parseInt(guess) === number){

output.innerText = "Correct! 🎉";

}

else{

output.innerText = "Wrong! The number was " + number;

}

}
