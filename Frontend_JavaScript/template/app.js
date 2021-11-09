class User{
  constructor(username, birthday, status){
    this.username = username;
    this.birthday = birthday;
    this.status = status;
  }

}
var str = "<b>Bob</b>, I'm <b>20</b> years old, I like <b>programming</b>.";

var result = str.match(/<b>(.*?)<\/b>/g).map(function(val){
   return val.replace(/<\/?b>/g,'');
});
//result -> ["Bob", "20", "programming"]
function removeProperty(obj, prop) {
  if(isset(obj.prop)){
    obj.prop = 0;
    return true;
  }
  return false
}
