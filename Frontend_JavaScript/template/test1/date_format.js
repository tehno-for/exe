function formatDate(userDate) {
let strM, strY,strD;
  // format from M/D/YYYY to YYYYMMDD
   if (userDate.slice(1,2) =='/'){
     if(userDate.slice(3,4)=='/'){
       strM = '0' + userDate.slice(0,1);
       strY = userDate.slice(4,8);
       strD = '0' + userDate.slice(2,3);
     } else {
       strM = '0' + userDate.slice(0,1);
       strY = userDate.slice(5,9);
       strD = userDate.slice(2,4);
     }
  } else if(userDate.slice(4,5)=='/'){
    strY = userDate.slice(5,9);
    strD = '0' + userDate.slice(3,4);
    strM = userDate.slice(0,2);
  }else{
    strY = userDate.slice(6,10);
    strD = userDate.slice(3,5);
    strM = userDate.slice(0,2);
  }

  return strY + strM + strD + '    test     ' + userDate.slice(1,2)  +'   test   '+  userDate.slice(0,1);
}
console.log(formatDate("1/01/2014"));
