const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};


person.nickname = 'Duke';
const message = `Hi Mr. ${person.name}. His live in ${person.city}. But his frend Mr. ${person.nickname}
is from Nebraska. His know ${person.skills.length} skills, it are: ${person.skills.join(', ')}.`;
console.log(message);
