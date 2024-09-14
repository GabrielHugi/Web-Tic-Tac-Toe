const toddler = document.getElementById("ToddlerDificultyButton");
const easy = document.getElementById("EasyDificultyButton");
const medium = document.getElementById("MediumDificultyButton");
const hard = document.getElementById("HardDificultyButton");

toddler.addEventListener("click", function() {
    dificulty = 0.2;
})
easy.addEventListener("click", function() {
    dificulty = 0.8;
})
medium.addEventListener("click", function() {
    dificulty = 0.9;
})
hard.addEventListener("click", function() {
    dificulty = 1;
})
