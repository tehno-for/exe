const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');



// listDiv.addEventListener('mouseover', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toUpperCase();
//   }
// });
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toLowerCase();
//   }
// });

listUl.addEventListener('click', (e)=>{
  if(e.target.tagName == 'BUTTON'){
    li = e.target.parentNode;
    ul = li.parentNode;
    ul.removeChild(li);
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.innerHTML = addItemInput.value + `<button id="rm">Remove</button>`;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
