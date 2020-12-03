// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


// //create variable for btn

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color')
// btn.addEventListener('click', function() {
//     // console.log(document.body);
//     const randomNumber = getRandomNumber();
//     // console.log(randomNumber)
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// })


// //function for get random number
// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

//first step solid color create
//second step create variable btn && color by getelementby id and query selector
//add event listener for btn
//create variable for randomnumber and assign solid value
//change the body background color with colors 
//color class to randomnumber

//create function getRandomNumber with math.floor and math.random


const colors = ["green", "purple", "rgba(200,100,30)", "#fafa11"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

document.addEventListener('keyup', function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}