var course = new Object();

var course = {
  title: "Java Script Essential",
  author: "Hendricson",
  level: 1,
  published: true,
  views: 0,
  updateViews:function(){
    return this.views++;
  }
}
course.sudents = 5;

console.log(course);
console.log(course.author);

console.log(course.views);
course.updateViews();
console.log(course.views);
