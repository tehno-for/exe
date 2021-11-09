const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos
  .filter(n => n.done === false)
  .map(n => n.todo);

console.log(unfinishedTasks);
