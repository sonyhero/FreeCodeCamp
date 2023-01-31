Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
this.forEach( (a,b,c) =>  newArray.push(callback(a,b,c)))
  // Only change code above this line
  return newArray;
};