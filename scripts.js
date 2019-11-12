let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1Background = document.querySelector("h1");
let newColorButton = document.getElementById("newColorButton");
let toggleOutline = document.querySelector("h1");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let correctMessage = document.querySelector(".correctMessage");

hardBtn.classList.add("selected");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1Background.style.backgroundColor = "#029BEB";
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    h1Background.style.backgroundColor = "#029BEB";
});

colorDisplay.textContent = pickedColor;

newColorButton.addEventListener("click", function() {
//    Generate random colors
    colors = generateRandomColors(numSquares);
//    Pick a new random color from array
    pickedColor = pickColor();
//    change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    toggleOutline.classList.remove("textOutline");
    this.textContent = "New Colors";
//    Change colors of square
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1Background.style.backgroundColor = "#029BEB";
    correctMessage.textContent = ""
});

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of picked square and compare to clicked color
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT!";
            changeColor(clickedColor);
            h1Background.style.backgroundColor = clickedColor;
            newColorButton.textContent = "Play again";
            toggleOutline.classList.add("textOutline");
        } else {
            this.style.backgroundColor = "#232323";
            // messageDisplay.textContent = "Try again";
        }
    });
}

function pickColor() {
   let randomNumber =  Math.floor(Math.random() * (colors.length));
   return colors[randomNumber];
}

function changeColor(color) {
// loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each square color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
//    make an array
    let arr = [];
//    add num random colors to array
    for (let i = 0; i < num; i++) {
    //    get random color and push in to array
        arr.push(randomColor());
    }
//    return array
    return arr;
}

function randomColor() {
//    pick a red from 0-255
    let r = Math.floor(Math.random() * 256);
//    pick a green from 0-255
    let g = Math.floor(Math.random() * 256);
//    pick a blue from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
