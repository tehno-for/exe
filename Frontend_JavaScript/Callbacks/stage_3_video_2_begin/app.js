const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


const focus = (e) => {
  e.target.className = 'highlight';
};

const blur = (e) => {
  e.target.className = '';
};

nameInput.addEventListener('focus', focus);

nameInput.addEventListener('blur', blur);

messageTextArea.addEventListener('focus', focus);

messageTextArea.addEventListener('blur', blur);
