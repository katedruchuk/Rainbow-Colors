let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let indigo = document.getElementById("indigo");
let violet = document.getElementById("violet");
let button = document.getElementById("button1");
let animation = document.getElementById("button2");

red.onclick = switch_red;
orange.onclick = switch_orange;
yellow.onclick = switch_yellow;
green.onclick = switch_green;
blue.onclick = switch_blue;
indigo.onclick = switch_indigo;
violet.onclick = switch_violet;
button.onclick = switch_white;
animation.onclick = do_animation;


function switch_red() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#e32d1c";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_orange() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#ef8d10";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_yellow() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f2cc42";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_green() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#4ea432";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_blue() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#37b6c8";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_indigo() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#4B0082";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function switch_violet() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#a637c8";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}


function switch_white() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
    document.getElementsByTagName("body")[0].classList.remove("anim");
}

function do_animation() {
    document.getElementsByTagName("body")[0].className = "anim";
}

let play = function () {
    document.getElementById("audio").play();
}