const title =   <h1 id='main-title' className='test'>My First react element</h1>;
const p = <p>My first perhaps with JSX</p>;

const header = (
  <header>
  { title }
  { p }
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
