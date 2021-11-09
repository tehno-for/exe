class User {
  constructor(username, prop){
    this.username = username;
    this.prop = prop;
  }

}
function removeProperty(obj, prop) {
  if(isset(obj.prop)){
    obj.prop = 0;
    return true;
  }
  return false
}


let obj = new User('lets','kir');
//console.log(obj.prop);
removeProperty(obj, obj.prop);
