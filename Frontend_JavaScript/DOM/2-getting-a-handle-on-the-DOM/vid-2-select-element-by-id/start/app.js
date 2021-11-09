const MYLIST = document.getElementsByTagName('li');

for (let i = 0; i < MYLIST.length; i+=1 ){
  MYLIST[i].style.color = 'red';
}

const NOTRED = document.querySelectorAll('.not-red');

for (let i = 0; i < NOTRED.length; i+=1 ){
  NOTRED[i].style.color = 'blue';
}
