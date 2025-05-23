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