function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for ( let key in beagle) {
  if (beagle.hasOwnProperty(key)) {
    ownProps.push(key);
  } else {
    prototypeProps.push(key);
  }
}
// Only change code below this line