function Course (title, instructor, level, published, views, updateViews){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  }
}
/*
var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);
var course02 = new Course("PHP MySQL Essential 1", "Kevin Scogland", 2, true, 121212);
*/

var course = [
  new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
  new Course("PHP MySQL Essential 1", "Kevin Scogland", 2, true, 121212)
]


console.log(course[0]);
console.log(course[1]);
console.log(course[1].title);
