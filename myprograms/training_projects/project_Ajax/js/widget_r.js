var xhr_rooms = new XMLHttpRequest();
xhr_rooms.onreadystatechange = function () {
  if(xhr_rooms.readyState === 4 && xhr_rooms.status === 200) {
    var rooms = JSON.parse(xhr_rooms.responseText);
    var statusHTML = '<ul class="rooms">';
    for (let i in rooms) {
      if (rooms[i].available) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhr_rooms.open('GET', 'data/rooms.json');
xhr_rooms.send();
