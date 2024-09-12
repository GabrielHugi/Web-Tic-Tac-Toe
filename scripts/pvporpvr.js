document.getElementById("pvp").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("varyingSource").src = "scripts/jogodavelha.js";
})
document.getElementById("pvr").addEventListener("click", function () {
    document.getElementById("everything").style.display = "block";
    document.getElementById("pvp").style.display = "none";
    document.getElementById("pvr").style.display = "none";
    document.getElementById("varyingSource").src = "scripts/jogodavelha2.js";
})
