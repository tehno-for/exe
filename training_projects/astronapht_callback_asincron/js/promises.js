const astrosUrl = 'astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      //console.log(xhr.status);
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = () => reject( Error('A network error occured.') );
    xhr.send();
  });

}

function getProfiles(json) {
  const profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);
  });
  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  getJSON(astrosUrl)
    .then(getProfiles)
    .then(generateHTML)
    .catch( err=>{
      console.log(err);
      peopleList.innerHTML = "<h3>Something was wrong!!</h3>";
    })
    .finally(() => event.target.remove())
    ;

});
