var content = '';
    for (let an in pets){
      content +=  `<h2>${pets[an].name}</h2>
                  <h3>${pets[an].type} | ${pets[an].breed}  </h3>
                  <p> Age: ${pets[an].age} </p>
                  <img src="${pets[an].photo}" alt="${pets[an].breed}">`;
    }
    document.querySelector('main').insertAdjacentHTML('beforeend', content);





/*
    var content = '';
        for (let an in pets){
          content += '<h2>'+ pets[an].name+'</h2>';
          content += '<h3>'+ pets[an].type + ' | '+ pets[an].breed + '</h3>';
          content += '<p>Age:' + pets[an].age + '</p>';
          content += `<img src="`+pets[an].photo + `" alt="`+pets[an].breed+`">`;
        }
        document.querySelector('main').innerHTML = content; */
