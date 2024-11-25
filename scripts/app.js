// alert("connected");

// Id Section
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");
// let box6 = document.getElementById("box6");
// let box7 = document.getElementById("box7");
// let box8 = document.getElementById("box8");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

// Variables Section
let boxIndex;
let color;
// let boxArray =[box1, box2, box3, box4, box5, box6, box7, box8]

changeColorBtn.addEventListener('click', function(){
    color = changeColor.value;
    // console.log(color);
    boxIndex = Number(boxNumber.value) - 1;
    let boxNum = boxNumber.value;
    // console.log(typeof(Number(boxNumber.value)))

    // switch(boxNumber.value) {
    //     case '1':
    //         boxIndex = 0;
    //         break;

    //     case '2':
    //         boxIndex = 1;
    //         break;

    //     case '3':
    //         boxIndex = 2;
    //         break;

    //     case '4':
    //         boxIndex = 3;
    //         break;

    //     case '5':
    //         boxIndex = 4;
    //         break;

    //     case '6':
    //         boxIndex = 5;
    //         break;

    //     case '7':
    //         boxIndex = 6;
    //         break;

    //     case '8':
    //         boxIndex = 7;
    //         break;

    //     default:
    //         console.log("invalid input");
    //         alert("Please enter a single digit for the box number");

    // }

    // console.log(boxIndex);
    // boxArray[boxIndex].className =`col-3 text-center boxSize ${color}`;
    // boxArray[boxIndex].classList.add(`${color}`);
    // console.log(boxArray[boxIndex].classList);

    let target = document.getElementById(`box${boxNum}`);
    target.className = `col-3 text-center boxSize ${color}`;
})

resetBtn.addEventListener('click', function(){
    for(let i = 0; i < boxArray.length; i++) {
        boxArray[i].className = "col-3 text-center boxSize";
    }
    // console.log(boxArray[boxIndex].classList);
})