var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h5 = document.querySelector(".colorName");
var body = document.querySelector("body");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + " , " 
    + color2.value + ")"; 

    h5.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);