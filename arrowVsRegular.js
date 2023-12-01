let Person = {
    name: "shatmanyu",
    getName: function () {
      const child = (name, age, ...rest) => {
        console.log("arrow func in child..", rest);
      };
      // var self = this;
      // function child() {
      //   console.log("in child...", this);
      // }
      child(12, 21, 22212, 2121);
      console.log("regular func in person...", arguments, this, this.name);
    },
  };
  Person.getName();
  // constructor function
  function Person1(name, age) {
    this.name = name;
    this.age = age;
  }
  var John = new Person1("John", 12);
  console.log("constructor func...", John);

// this in arrow is lexical scope , while in regular has its own this
// can't create constructors from arrow func
// Arrow Functions are not hoisted but regular functions are hoisted
// arguments object is not accesible inside arrow funcs,for this spread operator
// is there in arrow funcs