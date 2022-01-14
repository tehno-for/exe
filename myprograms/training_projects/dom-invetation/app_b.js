const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e)=>{
  e.preventDefault();


  const li = document.createElement('li');
  if(input.value){
    li.textContent = input.value;
    input.value = '';
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    ul.appendChild(li);
    label.appendChild(checkbox);
    li.appendChild(label);
  }
});

ul.addEventListener('change', (e)=>{
  console.log(e.target.checked);
  const checkbox = event.target;
  const checked = checkbox.checked;
  listItem = checkbox.parentNode.parentNode;

  if(checked){
    listItem.className = 'responded';
  }else{
    listItem.className ='';
  }
})
