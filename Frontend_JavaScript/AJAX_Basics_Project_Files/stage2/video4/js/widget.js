const employee = document.querySelector("#employeeList");
const tt = document.getElementById("employeeList");

var xhr = new XMLHttpRequest();
var json1;

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status ===200){
    json1 = JSON.parse(xhr.responseText);
      var statusHTML =   '<ul class="bulleted">';
      for(var i = 0; i < json1.length; i+=1){

        if(json1[i].inoffice){
          statusHTML += '<li class="in">'+json1[i].name+'</li>';
        } else {
          statusHTML += '<li class="out">'+json1[i].name+'</li>';
        }
      }
      statusHTML +=   '</ul>';
      //let employee = document.getElementById("employeeList");
      employee.innerHTML = statusHTML;
  }
}

xhr.open('GET', 'data/employees.json');
xhr.send();
