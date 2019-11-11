﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var currentTurn = "X";

document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', onClick);
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = currentTurn;
        if (!checkForWin()) {
            currentTurn = currentTurn === "X" ? "O" : "X";
            document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";
        }
    }

}
function declareWinner() {
    document.getElementById("turn").innerText = "Player " + currentTurn + " wins!"
}
function checkForWin() {
    for (var i = 0; i < 9; i+=3) {
        if (squares[i].innerText === squares[i + 1].innerText && squares[i + 1].innerText === squares[i + 2].innerText && squares[i].innerText) {
            declareWinner();
            return true;
        }
    }
    for (var i = 0; i < 3; i ++) {
        if (squares[i].innerText === squares[i + 3].innerText && squares[i + 3].innerText === squares[i + 6].innerText && squares[i].innerText) {
            declareWinner();
            return true;
        }
    }

    return false;
}