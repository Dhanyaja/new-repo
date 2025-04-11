/**
 * 1. choose a random square
 *      remove emoji class from all squares
 *      choose a random square and add emoji class to it
 *      change hit position to that random square id
 * 
 * 2. iterate through all the squares and check if the square.id = hitposition
 *      if equal, increase score by 1
 *                set hitposition to null
 *                 display score = result
 * 
 * 3. move emoji function--  call random square function every 500ms
 */

const squares = document.querySelectorAll(".square")
const score = document.getElementById("score")
const timeLeft = document.getElementById("time-left")

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare(){
    squares.forEach((square) => {
        square.classList.remove("emoji");
    })

    let randomSquare = squares[Math.floor(Math.random() * 10)];
    randomSquare.classList.add("emoji")
    hitPosition = randomSquare.id
}
squares.forEach((square) => {
    square.addEventListener("mousedown", () =>{
        if(square.id == hitPosition){
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})

function moveEmoji(){
    timerId = setInterval(randomSquare, 500)
}
moveEmoji()
function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(timerId)
        clearInterval(countDownTimerId)
        alert(`Game Over! Your Final Score Is ${result}`);

    }
}
let countDownTimerId = setInterval(countDown, 1000);