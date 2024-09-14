document.getElementById("pvp").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("DifficultyMenu").style.display = "none";
    document.getElementById("MainTicTacToeDiv").style.marginLeft = "88%"
    document.getElementById("varyingSource").src = "scripts/playervsplayer.js";
})
document.getElementById("pvr").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("varyingSource").src = "scripts/playervsrobot.js";
    document.getElementById("DifficultySource").src = "scripts/dificulty.js";
})
