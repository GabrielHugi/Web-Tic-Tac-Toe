// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license
// some of the comments are in portuguese, others in english. Most are in english though because I prefer english. 

const toddler = document.getElementById("ToddlerDificultyButton");
const easy = document.getElementById("EasyDificultyButton");
const medium = document.getElementById("MediumDificultyButton");
const hard = document.getElementById("HardDificultyButton");

toddler.addEventListener("click", function() {
    dificulty = 0.1;
    console.log("Toddler difficulty selected. Seriously bro?");
})
easy.addEventListener("click", function() {
    dificulty = 0.8;
    console.log("Easy difficulty selected");
})
medium.addEventListener("click", function() {
    dificulty = 0.9;
    console.log("Medium difficulty selected");
})
hard.addEventListener("click", function() {
    dificulty = 1;
    console.log("Hard difficulty selected");
})
