// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license

document.getElementById("ResetButton").addEventListener("click", reset)
document.getElementById("ResetButtonForPVP").addEventListener("click", reset)

function reset () {
    ended = 0;
    player = 1;
    whichPlayer();
    spot1Value = 0;
    spot1.src = 'Untitled.png';
    spot2Value = 0;
    spot2.src = 'Untitled.png';
    spot3Value = 0;
    spot3.src = 'Untitled.png';
    spot4Value = 0;
    spot4.src = 'Untitled.png';
    spot5Value = 0;
    spot5.src = 'Untitled.png';
    spot6Value = 0;
    spot6.src = 'Untitled.png';
    spot7Value = 0;
    spot7.src = 'Untitled.png';
    spot8Value = 0;
    spot8.src = 'Untitled.png';
    spot9Value = 0;
    spot9.src = 'Untitled.png';
}