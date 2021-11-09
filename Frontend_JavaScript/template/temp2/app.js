const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    const index = parseInt(indexText.value, 10);

    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i];
       console.log(law);
       // replace 'false' with a correct test condition on the line below
       if (i == index) {
            console.log('test');
           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});
