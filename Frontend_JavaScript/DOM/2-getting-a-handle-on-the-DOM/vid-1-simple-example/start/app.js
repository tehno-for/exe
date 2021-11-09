const MYHEADING = document.getElementsByTagName('p');
const MYBUTTON = document.getElementById('myButton');
const INPUT = document.getElementById('input');

MYBUTTON.addEventListener('click', ()=>{
  MYHEADING.style.backgroundColor = INPUT.value;
})
