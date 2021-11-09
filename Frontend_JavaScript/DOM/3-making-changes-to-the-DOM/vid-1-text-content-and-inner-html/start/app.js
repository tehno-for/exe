let TARGET = document.querySelector('p.description');
let BUTTON = document.querySelector('button');
let INPUT = document.querySelector('input');

BUTTON.addEventListener('click', ()=>{
  TARGET.textContent = INPUT.value + ':';
})
