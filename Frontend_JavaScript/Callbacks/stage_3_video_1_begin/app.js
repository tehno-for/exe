
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element1) {
    element1.style.backgroundColor = "blue";
}


function addStyleToElement(element, callback) {
    callback(element);
}

addStyleToElement(div1, makeRed);
makeBlue(div2);

addStyleToElement(div3, ()=>{
  div3.style.backgroundColor = 'green';
});
