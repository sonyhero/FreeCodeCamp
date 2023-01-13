const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let n = 0;
for (let key in usersObj) {
  if(usersObj[key].online === true) {
    n++
  }
} return n;
  // Only change code above this line
}

console.log(countOnline(users));