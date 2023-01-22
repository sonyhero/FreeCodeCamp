function repeatStringNumTimes(str, num) {
  let arr = []
  if ( num > 0 ) {
    for (let i=1; i<=num; i++) {
    arr.push(str);
  } return arr.join('');
  } else return ""
  
}

repeatStringNumTimes("abc", 3);