function checkObj(obj, checkProp) {
  // Only change code below this line
  const myObj = obj;
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp]
  } else {
    return "Not Found";
  }
  // Only change code above this line
}