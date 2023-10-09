class User {
  constructor(_firstname, _lastname, _age, _location) {
    this.firstname = _firstname;
    this.lastname = _lastname;
    this.age = _age;
    this.location = _location;
  }
}

const userX = new User("jasmine", "garcia", 32, "tenerife");

const userY = new User("johnny", "grant", 18, "florida");

const Older = function () {
  if (userX.age > userY.age) {
    console.log("userX è il più vecchio");
  } else {
    console.log("userY è il più vecchio");
  }
};

Older(userX, userY);
