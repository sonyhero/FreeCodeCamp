function truncateString(str, num) {
  let arr = []
  if (str.length > num) {
    for ( let i = 0; i<num; i++) {
    arr.push(str[i])
  }
  return arr.join('')+"...";
  } else return str;
  
};

truncateString("A-tisket a-tasket A green and yellow basket", 8);