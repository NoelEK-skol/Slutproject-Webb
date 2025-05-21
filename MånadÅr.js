function Månad(){
    var Månad = document.getElementById("Månad");
    document.getElementById("Månad").style.display = "block";
    document.getElementById("År").style.display = "none";
    document.getElementsByClassName("btnM")[0].style.backgroundColor = "Gray";
    document.getElementsByClassName("btnÅ")[0].style.backgroundColor = "White";
}

function År(){
    var År = document.getElementById("År");
    document.getElementById("Månad").style.display = "none";
    document.getElementById("År").style.display = "block";
    document.getElementsByClassName("btnÅ")[0].style.backgroundColor = "Gray";
    document.getElementsByClassName("btnM")[0].style.backgroundColor = "White";
}

document.getElementById("År").style.display = "none";
document.getElementsByClassName("btnM")[0].style.backgroundColor = "Gray";






function Content1(){
    var Content1 = document.getElementById("Content1");
    document.getElementById("Content1").style.display = "block";
    document.getElementById("Content2").style.display = "none";
    document.getElementsByClassName("btn1")[0].style.backgroundColor = "Gray";
    document.getElementsByClassName("btn2")[0].style.backgroundColor = "White";
}

function Content2(){
    var Content2 = document.getElementById("Content2");
    document.getElementById("Content1").style.display = "none";
    document.getElementById("Content2").style.display = "block";
    document.getElementsByClassName("btn2")[0].style.backgroundColor = "Gray";
    document.getElementsByClassName("btn1")[0].style.backgroundColor = "White";
}

document.getElementById("Content2").style.display = "none";
document.getElementsByClassName("btn1")[0].style.backgroundColor = "Gray";