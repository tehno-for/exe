const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const inputChangeTitle = document.querySelector('input.description');
const changeTitle = document.querySelector('p.description');
const buttonChangeTitle = document.querySelector('button.description');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

buttonChangeTitle.addEventListener('click', () => {
  changeTitle.innerHTML = inputChangeTitle.value + ':';
});

addItemButton.addEventListener('click',()=>{
  let LI = document.createElement('li');
  LI.textContent = addItemInput.value;
});
