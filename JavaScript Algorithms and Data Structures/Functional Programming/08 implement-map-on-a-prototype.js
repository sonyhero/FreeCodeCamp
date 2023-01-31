Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
this.forEach( (a,b,c) => {
  if(callback(a,b,c)) {
    newArray.push(a)
  }
} )
  // Only change code above this line
  return newArray;
};