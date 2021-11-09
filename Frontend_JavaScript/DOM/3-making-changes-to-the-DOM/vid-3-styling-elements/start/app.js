const HIDE = document.getElementById('tugleList');
const LIST = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

HIDE.addEventListener('click', ()=>{
  if(LIST.style.display === "none"){
    LIST.style.display = "block";
    HIDE.textContent = "Hide list";
  } else {
    LIST.style.display = "none";
    HIDE.textContent = "Show list";
  }
});

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});
