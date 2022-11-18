// Script.js
let calcBtn = document.getElementById("calc-btn");
let sumout = document.getElementById("sum-out");
let input = document.getElementById("n-in");
let val = input.value;

calcBtn.addEventListener("click", calcsum);


function calcsum() { 
    console.log(val)
    let total = 0;
    for (let n = 1; n <= v; n++) {
        total = total + n;
    }
    sumout.innerHTML = total;
}