// object
let student = {
  fullName: 'mou',
  age: 23,
  city: 'bangalore',
  address: {
    street: 'MG road',
    pincode: 560001,
    home: {
      type: 'apartment',
      number: 101,
    },
  },
};
// console.log(student.address.pincode);

// destructuring
// let {fullName, age, city, address: {street, pincode, home: {type, number}}} = student;
// console.log(name, age, city);

// console.log(address.street);

// nested destructuring
// console.log(number);

// for in loop -> iterates over enumerable properties of an object
// for (let key in student) {
//     // console.log(key); // keys
//     // console.log(student[key]); // values
// }

// object methods -> Object.keys(), Object.values(), Object.entries()
let keys = Object.keys (student);
// console.log(keys);

let employee = {
  name: 'Sita',
  salary: 30000,
  getSalary: function () {
    return this.salary;
  },
};
// console.log (employee.getSalary ());

// cities = [
//   {name: 'Los Angeles', population: 3792621},
//   {name: 'New York', population: 8175133},
//   {name: 'Chicago', population: 2695598},
//   {name: 'Houston', population: 2099451},
//   {name: 'Philadelphia', population: 1526006},
// ];

// cities.map((city) => {
//     console.log(city.name);
// })
