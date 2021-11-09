const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
  event.target.className = '';
});

messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

messageTextArea.addEventListener('blur', event => {
  event.target.className = '';
});