function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let key in canary) {
  if(canary.hasOwnProperty(key)) {
    ownProps.push(key);
  }
}
// Only change code below this line