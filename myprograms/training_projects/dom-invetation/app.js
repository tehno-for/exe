document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const ul = document.getElementById('invitedList');

  const show = document.getElementById('show');


  function addLi(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    const del = document.createElement('button');
    del.textContent = 'Delete';
    label.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(del);

    return li;
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value){
      const text = input.value;
      input.value = '';
      const li = addLi(text);
      ul.appendChild(li);
    }
  });

  ul.addEventListener('change', (e)=>{
    //console.log(e.target.checked);
    const checkbox = event.target;
    const checked = checkbox.checked;
    listItem = checkbox.parentNode.parentNode;

    if(checked){
      listItem.className = 'responded';
    } else {
      listItem.className ='';
    }
  });

  ul.addEventListener('click',(e)=>{
    const button = e.target;
    let li = button.parentNode;
    let ul = li.parentNode;
    let inout = document.createElement('input');

    if(button.tagName === "BUTTON"){
      if(button.textContent === "Delete"){
        ul.removeChild(li);
      }else if(button.textContent === "Edit"){
        let span = li.firstElementChild;
        inout.type = "text";
        inout.value = span.textContent;
        li.insertBefore(inout, span);
        li.removeChild(span);
        button.textContent = "Save";
        //console.log(span.textContent);
      } else if(button.textContent ==="Save") {
        let inout = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = inout.value;
        li.insertBefore(span, inout);
        li.removeChild(inout);
        button.textContent = 'Edit';
      }
    }
  });


  show.addEventListener('change',(e)=>{
    const sli = document.getElementsByTagName('li');
    //console.log(checkbox.checked);
    if(e.target.checked){
      for (const i in sli){
        if(sli[i].className !== 'responded'){
          sli[i].style.display = 'none';
        }
      }
    } else {
      for (const i in sli){
        sli[i].style.display = '';
      }
    }
  });

});
