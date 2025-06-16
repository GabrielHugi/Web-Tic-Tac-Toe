// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license
// some of the comments are in portuguese, others in english. Most are in english though because I prefer english. 

// these variables are used to indicate if a certain special action is the one that
// is triggering the robot move functions so that it can be tuned better
var isAdvancedMove = 0;



// the rate at which the robot will ignore everything and just pick a random spot
// this will be used by checking if a generated number is equal to or bigger than
// the value of this variable.
var dificulty = 0.9;

// so spotRandomFR() does not happen multiple times and destroy everything here's a control variable 
var doneFor = 0;


// the game objects
const spot1 = document.getElementById("4grid1");
const spot2 = document.getElementById("4grid2");
const spot3 = document.getElementById("4grid3");
const spot4 = document.getElementById("4grid4");
const spot5 = document.getElementById("4grid5");
const spot6 = document.getElementById("4grid6");
const spot7 = document.getElementById("4grid7");
const spot8 = document.getElementById("4grid8");
const spot9 = document.getElementById("4grid9");
const spot10 = document.getElementById("4grid10");
const spot11 = document.getElementById("4grid11");
const spot12 = document.getElementById("4grid12");
const spot13 = document.getElementById("4grid13");
const spot14 = document.getElementById("4grid14");
const spot15 = document.getElementById("4grid15");
const spot16 = document.getElementById("4grid16");

var player = 1;
document.addEventListener("click", whichPlayer);

function whichPlayer() {
    // essa parte muda o texto de quem se move baseado em que player est� jogando
    // essa parte � separada do resto para economizar linhas de codigo
    if (player == 1) {
        document.getElementById("player").innerText = "Player 1 move";
    }
    else {
        document.getElementById("player").innerText = "Robot's move";
        robotMove();
    }
}

function robotMove() {
    var option;
    // robots other moves
    if (spot5Value == 0) {
        spot5FR();
        return;
    }
    if (spot1Value == 0 && spot2Value == 0 && spot3Value == 0 && spot4Value == 0 && spot5Value == 1 && spot6Value == 0 && spot7Value == 0 && spot8Value == 0 && spot9Value == 0) {
        option = Math.floor(Math.random()*4);
        if (option == 0) {
            spot1FR();
            return;
        }
        if (option == 1) {
            spot3FR();
            return;
        }
        if (option == 2) {
            spot7FR();
            return;
        }
        if (option == 3) {
            spot9FR();
            return;
        }
    }

    //robot offensive
    if (spot1Value == 2 && spot2Value == 2 && spot3Value == 0) {
        spot3FR();  
        return;
    }
    if (spot1Value == 2 && spot2Value == 0 && spot3Value == 2) {
        spot2FR();
        return;
    }
    if (spot1Value == 0 && spot2Value == 2 && spot3Value == 2) {
        spot1FR(); 
        return;
    }
    
    if (spot4Value == 2 && spot5Value == 2 && spot6Value == 0) {
        spot6FR();
        return;
    }
    if (spot4Value == 2 && spot5Value == 0 && spot6Value == 2) {
        spot5FR();
        return;
    }
    if (spot4Value == 0 && spot5Value == 2 && spot6Value == 2) {
        spot4FR();
        return;
    }

    if (spot7Value == 2 && spot8Value == 2 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot7Value == 2 && spot8Value == 0 && spot9Value == 2) {
        spot8FR();
        return;
    }
    if (spot7Value == 0 && spot8Value == 2 && spot9Value == 2) {
        spot7FR();
        return;
    }

    if (spot1Value == 2 && spot4Value == 2 && spot7Value == 0) {
        spot7FR();
        return;
    }
    if (spot1Value == 2 && spot4Value == 0 && spot7Value == 2) {
        spot4FR();
        return;
    }
    if (spot1Value == 0 && spot4Value == 2 && spot7Value == 2) {
        spot1FR();
        return;
    }

    if (spot2Value == 2 && spot5Value == 2 && spot8Value == 0) {
        spot8FR();
        return;
    }
    if (spot2Value == 2 && spot5Value == 0 && spot8Value == 2) {
        spot5FR();
        return;
    }
    if (spot2Value == 0 && spot5Value == 2 && spot8Value == 2) {
        spot2FR();
        return;
    }

    if (spot3Value == 2 && spot6Value == 2 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot3Value == 2 && spot6Value == 0 && spot9Value == 2) {
        spot6FR();
        return;
    }
    if (spot3Value == 0 && spot6Value == 2 && spot9Value == 2) {
        spot3FR();
        return;
    }

    if (spot1Value == 2 && spot5Value == 2 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot1Value == 2 && spot5Value == 0 && spot9Value == 2) {
       spot5FR();
       return;
    }
    if (spot1Value == 0 && spot5Value == 2 && spot9Value == 2) {
        spot1FR();
        return;
    }

    if (spot3Value == 2 && spot5Value == 2 && spot7Value == 0) {
        spot7FR();
        return;
    }
    if (spot3Value == 2 && spot5Value == 0 && spot7Value == 2) {
        spot5FR();
        return;
    }
    if (spot3Value == 0 && spot5Value == 2 && spot7Value == 2) {
        spot3FR();
        return;
    }

    // robot defensive
    if (spot1Value == 1 && spot2Value == 1 && spot3Value == 0) {
        spot3FR();
        return;
    }
    if (spot1Value == 1 && spot2Value == 0 && spot3Value == 1) {
        spot2FR();
        return;
    }
    if (spot1Value == 0 && spot2Value == 1 && spot3Value == 1) {
        spot1FR();
        return; 
    }
    
    if (spot4Value == 1 && spot5Value == 1 && spot6Value == 0) {
        spot6FR();
        return;
    }
    if (spot4Value == 1 && spot5Value == 0 && spot6Value == 1) {
        spot5FR();
        return;
    }
    if (spot4Value == 0 && spot5Value == 1 && spot6Value == 1) {
        spot4FR();
        return;
    }

    if (spot7Value == 1 && spot8Value == 1 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot7Value == 1 && spot8Value == 0 && spot9Value == 1) {
        spot8FR();
        return;
    }
    if (spot7Value == 0 && spot8Value == 1 && spot9Value == 1) {
        spot7FR();
        return;
    }

    if (spot1Value == 1 && spot4Value == 1 && spot7Value == 0) {
        spot7FR();
        return;
    }
    if (spot1Value == 1 && spot4Value == 0 && spot7Value == 1) {
        spot4FR();
        return;
    }
    if (spot1Value == 0 && spot4Value == 1 && spot7Value == 1) {
        spot1FR();
        return;
    }

    if (spot2Value == 1 && spot5Value == 1 && spot8Value == 0) {
        spot8FR();
        return;
    }
    if (spot2Value == 1 && spot5Value == 0 && spot8Value == 1) {
        spot5FR();
        return;
    }
    if (spot2Value == 0 && spot5Value == 1 && spot8Value == 1) {
        spot2FR();
        return;
    }

    if (spot3Value == 1 && spot6Value == 1 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot3Value == 1 && spot6Value == 0 && spot9Value == 1) {
        spot6FR();
        return;
    }
    if (spot3Value == 0 && spot6Value == 1 && spot9Value == 1) {
        spot3FR();
        return;
    }

    if (spot1Value == 1 && spot5Value == 1 && spot9Value == 0) {
        spot9FR();
        return;
    }
    if (spot1Value == 1 && spot5Value == 0 && spot9Value == 1) {
       spot5FR();
       return;
    }
    if (spot1Value == 0 && spot5Value == 1 && spot9Value == 1) {
        spot1FR();
        return;
    }

    if (spot3Value == 1 && spot5Value == 1 && spot7Value == 0) {
        spot7FR();
        return;
    }
    if (spot3Value == 1 && spot5Value == 0 && spot7Value == 1) {
        spot5FR();
        return;
    }
    if (spot3Value == 0 && spot5Value == 1 && spot7Value == 1) {
        spot3FR();
        return;
    }
    if (spot1Value == 1 && spot9Value == 1 || spot3Value == 1 && spot7Value == 1) {
        isAdvancedMove = 1;
        option = Math.floor(Math.random*4);
        if (option == 0) {
            spot2FR();
        }
        if (option == 1) {
            spot4FR();
        }
        if (option == 0) {
            spot6FR();
        }
        if (option == 0) {
            spot8FR();
        }
    }


    // last effort to make sure the robot will always make a move
    var avaible = [0,0,0,0,0,0,0,0,0];
    var where = 0;
    setTimeout(() => {
        if (spot1Value == 0) {
            avaible[where] = 1;
            where++;
        }
        if (spot2Value == 0) {
            avaible[where] = 2;
            where++;
        }
        if (spot3Value == 0) {
            avaible[where] = 3;
            where++;
        }
        if (spot4Value == 0) {
            avaible[where] = 4;
            where++;
        }
        if (spot5Value == 0) {
            avaible[where] = 5;
            where++;
        }
        if (spot6Value == 0) {
            avaible[where] = 6;
            where++;
        }
        if (spot7Value == 0) {
            avaible[where] = 7;
            where++;
        }
        if (spot8Value == 0) {
            avaible[where] = 8;
            where++;
        }
        if (spot9Value == 0) {
            avaible[where] = 9;
            where++;
        }
        option = Math.floor(Math.random()*(where-1));
        if (avaible[option] == 1) {
            spot1FR();
        }
        if (avaible[option] == 2) {
            spot2FR();
        }
        if (avaible[option] == 3) {
            spot3FR();
        }
        if (avaible[option] == 4) {
            spot4FR();
        }
        if (avaible[option] == 5) {
            spot5FR();
        }
        if (avaible[option] == 6) {
            spot6FR();
        }
        if (avaible[option] == 7) {
            spot7FR();
        }
        if (avaible[option] == 8) {
            spot8FR();
        }
        if (avaible[option] == 9) {
            spot9FR();
        }
    }, 100);
    
}


document.addEventListener("click", wonOrDraw);
var ended = 0;
function wonOrDraw() {
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
    //player 2 (robot nesse caso) vence
    if (spot1Value == 2 && spot2Value == 2 && spot3Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot4Value == 2 && spot5Value == 2 && spot6Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot7Value == 2 && spot8Value == 2 && spot9Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot1Value == 2 && spot4Value == 2 && spot7Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot2Value == 2 && spot5Value == 2 && spot8Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot3Value == 2 && spot6Value == 2 && spot9Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot1Value == 2 && spot5Value == 2 && spot9Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }
    if (spot3Value == 2 && spot5Value == 2 && spot7Value == 2) {
        document.getElementById("player").innerText = "Robot won";
        ended = 1;
        console.log("Robot won");
    }

    //empate
    if (spot1Value != 0 && spot2Value != 0 && spot3Value != 0 && spot4Value != 0 && spot5Value != 0 && spot6Value != 0 && spot7Value != 0 && spot8Value != 0 && spot9Value != 0 && ended == 0) {
        document.getElementById("player").innerText = "Draw";
        console.log("Draw");
    }
}

// se��o para mudar o valor e a imagem do jogo da velha

var spot1Value = 0;
spot1.addEventListener("click", spot1F);
function spot1F() {
    if (player == 1 && spot1Value == 0 && ended == 0) {
        spot1.src = 'O.png';
        spot1Value = 1;
        player = 2;
        console.log("Player 1 played at spot 1");
    }
}
// F stands for function and R for robot by the way
function spot1FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot1Value == 0 && ended == 0) {
            spot1.src = 'X.png';
            spot1Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 1");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot2FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot2Value == 0 && ended == 0) {
            spot2.src = 'X.png';
            spot2Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 2");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot3FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot3Value == 0 && ended == 0) {
            spot3.src = 'X.png';
            spot3Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 3");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot4Value = 0;
spot4.addEventListener("click", spot4F);
function spot4F() {
    if (player == 1 && spot4Value == 0 && ended == 0) {
        spot4.src = 'O.png';
        spot4Value = 1;
        player = 2;
        console.log("Player 1 played at spot 3");
    }
}

function spot4FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot4Value == 0 && ended == 0) {
            spot4.src = 'X.png';
            spot4Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 4");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

async function spot5FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => {   
        if (player == 2 && spot5Value == 0 && ended == 0) {
            spot5.src = 'X.png';
            spot5Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 5");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot6FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot6Value == 0 && ended == 0) {
            spot6.src = 'X.png';
            spot6Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 6");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot7FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot7Value == 0 && ended == 0) {
            spot7.src = 'X.png';
            spot7Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 7");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot8FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot8Value == 0 && ended == 0) {
            spot8.src = 'X.png';
            spot8Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 8");
        }
    }, 700);
    isAdvancedMove = 0;
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
}

function spot9FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot9Value == 0 && ended == 0) {
            spot9.src = 'X.png';
            spot9Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 9");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot10Value = 0;
spot10.addEventListener("click", spot10F);
function spot10F() {
    if (player == 1 && spot10Value == 0 && ended == 0) {
        spot10.src = 'O.png';
        spot10Value = 1;
        player = 2;
        console.log("Player 1 played at spot 10");
    }
}

function spot10FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot10Value == 0 && ended == 0) {
            spot10.src = 'X.png';
            spot10Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 10");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot11Value = 0;
spot11.addEventListener("click", spot11F);
function spot11F() {
    if (player == 1 && spot11Value == 0 && ended == 0) {
        spot11.src = 'O.png';
        spot11Value = 1;
        player = 2;
        console.log("Player 1 played at spot 11");
    }
}

function spot11FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot11Value == 0 && ended == 0) {
            spot11.src = 'X.png';
            spot11Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 11");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot12Value = 0;
spot12.addEventListener("click", spot12F);
function spot12F() {
    if (player == 1 && spot12Value == 0 && ended == 0) {
        spot12.src = 'O.png';
        spot12Value = 1;
        player = 2;
        console.log("Player 1 played at spot 12");
    }
}

function spot12FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot12Value == 0 && ended == 0) {
            spot12.src = 'X.png';
            spot12Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 12");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot13Value = 0;
spot13.addEventListener("click", spot13F);
function spot13F() {
    if (player == 1 && spot13Value == 0 && ended == 0) {
        spot13.src = 'O.png';
        spot13Value = 1;
        player = 2;
        console.log("Player 1 played at spot 13");
    }
}

function spot13FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot13Value == 0 && ended == 0) {
            spot13.src = 'X.png';
            spot13Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 13");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot12Value = 0;
spot14.addEventListener("click", spot14F);
function spot14F() {
    if (player == 1 && spot14Value == 0 && ended == 0) {
        spot14.src = 'O.png';
        spot14Value = 1;
        player = 2;
        console.log("Player 1 played at spot 14");
    }
}

function spot14FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot14Value == 0 && ended == 0) {
            spot14.src = 'X.png';
            spot14Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 14");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot15Value = 0;
spot15.addEventListener("click", spot15F);
function spot15F() {
    if (player == 1 && spot15Value == 0 && ended == 0) {
        spot15.src = 'O.png';
        spot15Value = 1;
        player = 2;
        console.log("Player 1 played at spot 15");
    }
}

function spot15FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot15Value == 0 && ended == 0) {
            spot15.src = 'X.png';
            spot15Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 15");
        }
    }, 700);
    isAdvancedMove = 0;
}

var spot16Value = 0;
spot16.addEventListener("click", spot16F);
function spot16F() {
    if (player == 1 && spot16Value == 0 && ended == 0) {
        spot16.src = 'O.png';
        spot16Value = 1;
        player = 2;
        console.log("Player 1 played at spot 16");
    }
}

function spot16FR() {
    var optionIDontKnow = Math.random();
    if (optionIDontKnow >= (dificulty - (0.3 * isAdvancedMove)) && doneFor != 1 && ended == 0) {
        spotRandomFR();
        console.log("Robot picked random move");
        return;
    }
    setTimeout(() => { 
        if (player == 2 && spot16Value == 0 && ended == 0) {
            spot16.src = 'X.png';
            spot16Value = 2;
            player = 1;
            whichPlayer();
            wonOrDraw();
            doneFor = 0;
            console.log("Robot played at spot 16");
        }
    }, 700);
    isAdvancedMove = 0;
}



function spotRandomFR() {
    doneFor = 1;
    setTimeout(() => {
        var avaible = [0,0,0,0,0,0,0,0,0];
        var where = 0;
        if (spot1Value == 0) {
            avaible[where] = 1;
            where++;
        }
        if (spot2Value == 0) {
            avaible[where] = 2;
            where++;
        }
        if (spot3Value == 0) {
            avaible[where] = 3;
            where++;
        }
        if (spot4Value == 0) {
            avaible[where] = 4;
            where++;
        }
        if (spot5Value == 0) {
            avaible[where] = 5;
            where++;
        }
        if (spot6Value == 0) {
            avaible[where] = 6;
            where++;
        }
        if (spot7Value == 0) {
            avaible[where] = 7;
            where++;
        }
        if (spot8Value == 0) {
            avaible[where] = 8;
            where++;
        }
        if (spot9Value == 0) {
            avaible[where] = 9;
            where++;
        }
        option = Math.floor(Math.random()*(where-1));
        if (avaible[option] == 1) {
            spot1FR();
        }
        if (avaible[option] == 2) {
            spot2FR();
        }
        if (avaible[option] == 3) {
            spot3FR();
        }
        if (avaible[option] == 4) {
            spot4FR();
        }
        if (avaible[option] == 5) {
            spot5FR();
        }
        if (avaible[option] == 6) {
            spot6FR();
        }
        if (avaible[option] == 7) {
            spot7FR();
        }
        if (avaible[option] == 8) {
            spot8FR();
        }
        if (avaible[option] == 9) {
            spot9FR();
        }
    }, 100);
}