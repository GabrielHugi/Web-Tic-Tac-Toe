// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license

document.getElementById("pvp").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("4x4pvr").style.display = "none";
    document.getElementById("ConfigMenu").style.display = "none";
    document.getElementById("MainTicTacToeDiv").style.display = "grid";
    document.getElementById("ConfigMenuForPVP").style.display = "flexbox";
    document.getElementById("varyingSource").src = "scripts/playervsplayer.js";
    //document.getElementById("DifficultySource").src = "nothing";
});
document.getElementById("pvr").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("4x4pvr").style.display = "none";
    document.getElementById("ConfigMenu").style.display = "flebox";
    document.getElementById("MainTicTacToeDiv").style.display = "grid";
    document.getElementById("ConfigMenuForPVP").style.display = "none";
    document.getElementById("varyingSource").src = "scripts/playervsrobot.js";
    document.getElementById("DifficultySource").src = "scripts/dificulty.js";
});
document.getElementById("4x4pvr").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("4x4pvr").style.display = "none";
    document.getElementById("ConfigMenu").style.display = "flebox";
    document.getElementById("4x4TicTacToeDiv").style.display = "grid";
    document.getElementById("ConfigMenuForPVP").style.display = "none";
    document.getElementById("varyingSource").src = "scripts/4x4playervsrobot.js";
    document.getElementById("DifficultySource").src = "scripts/dificulty.js";
});
