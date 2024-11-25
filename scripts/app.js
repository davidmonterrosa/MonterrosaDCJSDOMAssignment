// alert("connected");

// Id Section
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

// Variables Section
let boxIndex;
let color;
const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8];
const colors = ["red", "blue", "purple", "brown", "yellow"];

changeColorBtn.addEventListener('click', function () {
    color = changeColor.value.toLowerCase();
    boxIndex = Number(boxNumber.value) - 1;
    
    if(colors.includes(color) && (boxIndex >= 0 && boxIndex <= 7)) {
        boxArray[boxIndex].className =`col-3 text-center boxSize ${color}`;
    
        // The following code was Inspired by Charles Orr and Isaiah Ferguson
        boxNumber.value = "";
        changeColor.value = "";
    } else {
        console.log(colors.includes(color));
        alert("One or more fields contains an invalid input!");
    }
})

resetBtn.addEventListener('click', function () {
    for (let i = 0; i < boxArray.length; i++) {
        boxArray[i].className = "col-3 text-center boxSize";
    }
})