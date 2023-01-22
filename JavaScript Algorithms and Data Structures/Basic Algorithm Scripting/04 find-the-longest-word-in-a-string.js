function findLongestWordLength(str) {
  let arr = str.split(' ');
  return Math.max(...arr.map(x=>
    x=x.length
  ))
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");