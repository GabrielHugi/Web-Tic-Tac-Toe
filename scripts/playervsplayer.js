// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license
// some of the comments are in portuguese, others in english. Most are in english though because I prefer english. 

const spot1 = document.getElementById("1");
const spot2 = document.getElementById("2");
const spot3 = document.getElementById("3");
const spot4 = document.getElementById("4");
const spot5 = document.getElementById("5");
const spot6 = document.getElementById("6");
const spot7 = document.getElementById("7");
const spot8 = document.getElementById("8");
const spot9 = document.getElementById("9");

document.addEventListener("click", whichPlayer);
var player = 1;
function whichPlayer() {
    // essa parte muda o texto de quem se move baseado em que player estiver jogando
    // essa parte é separada do resto para economizar linhas de codigo
    if (killswitch == 0) {
        if (player == 1) {
            document.getElementById("player").innerText = "Player 1 move";
        }
        else document.getElementById("player").innerText = "Player 2 move";
    }
}

document.addEventListener("click", wonOrDraw);
var ended = 0;
function wonOrDraw() {
    if (killswitch == 0) {
        // player 1 vence
        if (spot1Value == 1 && spot2Value == 1 && spot3Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot4Value == 1 && spot5Value == 1 && spot6Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot7Value == 1 && spot8Value == 1 && spot9Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot1Value == 1 && spot4Value == 1 && spot7Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot2Value == 1 && spot5Value == 1 && spot8Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot3Value == 1 && spot6Value == 1 && spot9Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot1Value == 1 && spot5Value == 1 && spot9Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        if (spot3Value == 1 && spot5Value == 1 && spot7Value == 1) {
            document.getElementById("player").innerText = "Player 1 won";
            ended = 1;
            console.log("Player 1 won. Good job!");
        }
        //player 2 vence
        if (spot1Value == 2 && spot2Value == 2 && spot3Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot4Value == 2 && spot5Value == 2 && spot6Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot7Value == 2 && spot8Value == 2 && spot9Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot1Value == 2 && spot4Value == 2 && spot7Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot2Value == 2 && spot5Value == 2 && spot8Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot3Value == 2 && spot6Value == 2 && spot9Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot1Value == 2 && spot5Value == 2 && spot9Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }
        if (spot3Value == 2 && spot5Value == 2 && spot7Value == 2) {
            document.getElementById("player").innerText = "Player 2 won";
            ended = 1;
            console.log("Player 2 won. Good job!");
        }

        //empate
        if (spot1Value != 0 && spot2Value != 0 && spot3Value != 0 && spot4Value != 0 && spot5Value != 0 && spot6Value != 0 && spot7Value != 0 && spot8Value != 0 && spot9Value != 0 && ended == 0) {
            document.getElementById("player").innerText = "Draw";
            console.log("Draw");
        }
    }   
}

// seção para mudar o valor e a imagem do jogo da velha

var spot1Value = 0;
spot1.addEventListener("click", spot1F);
function spot1F() {
    if (player == 1 && spot1Value == 0 && ended == 0) {
        spot1.src = 'O.png';
        spot1Value = 1;
        player = 2;
        console.log("Player 1 played at spot 1");
    }
    if (player == 2 && spot1Value == 0 && ended == 0) {
        spot1.src = 'X.png';
        spot1Value = 2;
        player = 1;
        console.log("Player 2 played at spot 1");
    }
}

var spot2Value = 0;
spot2.addEventListener("click", spot2F);
function spot2F() {
    if (player == 1 && spot2Value == 0 && ended == 0) {
        spot2.src = 'O.png';
        spot2Value = 1;
        player = 2;
        console.log("Player 1 played at spot 2");
    }
    if (player == 2 && spot2Value == 0 && ended == 0) {
        spot2.src = 'X.png';
        spot2Value = 2;
        player = 1;
        console.log("Player 2 played at spot 2");
    }
}

var spot3Value = 0;
spot3.addEventListener("click", spot3F);
function spot3F() {
    if (player == 1 && spot3Value == 0 && ended == 0) {
        spot3.src = 'O.png';
        spot3Value = 1;
        player = 2;
        console.log("Player 1 played at spot 3");
    }
    if (player == 2 && spot3Value == 0 && ended == 0) {
        spot3.src = 'X.png';
        spot3Value = 2;
        player = 1;
        console.log("Player 2 played at spot 3");
    }
}

var spot4Value = 0;
spot4.addEventListener("click", spot4F);
function spot4F() {
    if (player == 1 && spot4Value == 0 && ended == 0) {
        spot4.src = 'O.png';
        spot4Value = 1;
        player = 2;
        console.log("Player 1 played at spot 4");
    }
    if (player == 2 && spot4Value == 0 && ended == 0) {
        spot4.src = 'X.png';
        spot4Value = 2;
        player = 1;
        console.log("Player 2 played at spot 4");
    }
}


var spot5Value = 0;
spot5.addEventListener("click", spot5F);
function spot5F() {
    if (player == 1 && spot5Value == 0 && ended == 0) {
        spot5.src = 'O.png';
        spot5Value = 1;
        player = 2;
        console.log("Player 1 played at spot 5");
    }
    if (player == 2 && spot5Value == 0 && ended == 0) {
        spot5.src = 'X.png';
        spot5Value = 2;
        player = 1;
        console.log("Player 2 played at spot 5");
    }
}

var spot6Value = 0;
spot6.addEventListener("click", spot6F);
function spot6F() {
    if (player == 1 && spot6Value == 0 && ended == 0) {
        spot6.src = 'O.png';
        spot6Value = 1;
        player = 2;
        console.log("Player 1 played at spot 6");
    }
    if (player == 2 && spot6Value == 0 && ended == 0) {
        spot6.src = 'X.png';
        spot6Value = 2;
        player = 1;
        console.log("Player 2 played at spot 6");
    }
}

var spot7Value = 0;
spot7.addEventListener("click", spot7F);
function spot7F() {
    if (player == 1 && spot7Value == 0 && ended == 0) {
        spot7.src = 'O.png';
        spot7Value = 1;
        player = 2;
        console.log("Player 1 played at spot 7");
    }
    if (player == 2 && spot7Value == 0 && ended == 0) {
        spot7.src = 'X.png';
        spot7Value = 2;
        player = 1;
        console.log("Player 2 played at spot 7");
    }
}

var spot8Value = 0;
spot8.addEventListener("click", spot8F);
function spot8F() {
    if (player == 1 && spot8Value == 0 && ended == 0) {
        spot8.src = 'O.png';
        spot8Value = 1;
        player = 2;
        console.log("Player 1 played at spot 8");
    }
    if (player == 2 && spot8Value == 0 && ended == 0) {
        spot8.src = 'X.png';
        spot8Value = 2;
        player = 1;
        console.log("Player 1 played at spot 8");
    }
}

var spot9Value = 0;
spot9.addEventListener("click", spot9F);
function spot9F() {
    if (player == 1 && spot9Value == 0 && ended == 0) {
        spot9.src = 'O.png';
        spot9Value = 1;
        player = 2;
        console.log("Player 1 played at spot 9");
    }
    if (player == 2 && spot9Value == 0 && ended == 0) {
        spot9.src = 'X.png';
        spot9Value = 2;
        player = 1;
        console.log("Player 1 played at spot 9");
    }
}