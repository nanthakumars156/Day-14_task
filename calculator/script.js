const title = document.getElementById('title');
title.innerText="CALCULATOR TASK";
const description=document.getElementById("description");
description.innerText="Calculator created using DOM";

let add = document.getElementById('add');
add.innerText="+";
let subtract = document.getElementById('subtract');
subtract.innerText="-";

let display = document.getElementById('result');

function appendToDisplay(value) {

    display.value += value;
  }


let equal = document.getElementById('equal');
function _result(){
    display.value=eval(display.value)
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9+\-*/.=]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Enter' || key === '=') {
    calculateResult();
  }
});