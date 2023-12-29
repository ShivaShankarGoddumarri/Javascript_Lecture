
// Creating an object using Object Literal
let personLiteral = {
  name: "Gowtham",
  age: 28,
  city: "Hyderabad"
};

// Creating an object using the new keyword with Object constructor
let personObjectConstructor = new Object();
personObjectConstructor.name = "Gowtham";
personObjectConstructor.age = 28;
personObjectConstructor.city = "Hyderabad";

// Creating an object using a Constructor Function
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
let personConstructorFunction = new Person("Gowtham", 28, "Hyderabad");

// Accessing Object Properties
console.log(personLiteral.name);
console.log(personObjectConstructor["age"]);

// Modifying Object Properties
personLiteral.age = 31;
personObjectConstructor["city"] = "Kadapa";

// Adding New Properties
personLiteral.job = "Engineer";
personObjectConstructor["salary"] = 80000;

// Removing Properties
delete personLiteral.city;

// Object Methods
let personWithMethod = {
  name: "Gowtham",
  sayHello: function() {
      console.log("Hello, my name is " + this.name);
  }
};
personWithMethod.sayHello(); 

// Object Iteration
for (let key in personObjectConstructor) {
  console.log(key + ": " + personObjectConstructor[key]);
}




// Objects

// 1. Creating an object 
const person = {
    name: 'shiva',
    age: 23,
    address: {
      city: 'Dharmavaram',
      country: 'India'
    }
  };
  
  // 2. Object.keys
  const keysPerson = Object.keys(person);
  console.log('1. Object.keys:', keysPerson); // ['name', 'age', 'address']
  
  // 3. Object.values
  const valuesPerson = Object.values(person);
  console.log('2. Object.values:', valuesPerson);                       
  
  // 4. Object.entries
  const entriesPerson = Object.entries(person);
  console.log('3. Object.entries:', entriesPerson);
  
  // 5. Accessing nested properties using object keys
  const cityValue = person.address.city;
  console.log('4. Accessing nested properties:', cityValue); // 'Dharmavaram'
  
  // 6. Checking if a property exists in an object
  const hasAge = 'age' in person;
  console.log('5. Property "age" exists:', hasAge); // true
  
  const hasGender = 'gender' in person;
  console.log('6. Property "gender" exists:', hasGender); // false
  
  // 7. Deleting a property from an object
  delete person.address;
  console.log('7. After deleting "address":', person);
  
  // 9. Object.freeze to make an object immutable
  const immutableObject = Object.freeze({ key: 'value' });
  // Trying to modify the object will result in an error
  // immutableObject.key = 'new value'; // Error: Cannot assign to read only property 'key'...
  
  // 10. Object.seal to prevent adding or removing properties, but allows modifying existing properties
  const sealedObject = Object.seal({ key: 'value' });
  // Trying to add or remove properties will result in an error
  // sealedObject.newKey = 'new value'; // Error: Cannot add property newKey...
  
  // 11. Object.getOwnPropertyNames to get all property names, including non-enumerable ones
  const propertyNames = Object.getOwnPropertyNames(person);
  console.log('10. Object.getOwnPropertyNames:', propertyNames);
  
  // 12. Object.fromEntries to create an object from an array of [key, value] pairs
  const arrayPairs = [['fruit', 'apple'], ['vegetable', 'carrot']];
  const fromEntriesObject = Object.fromEntries(arrayPairs);
  console.log('11. Object.fromEntries:', fromEntriesObject);
  
  // 13. Object.keys on an array (index keys)
  const array = ['apple', 'banana', 'orange'];
  const arrayKeys = Object.keys(array);
  console.log('12. Object.keys on array:', arrayKeys); // ['0', '1', '2']
  
  // 14. Using Object.create to create an object with a specified prototype object
  const protoObject = { greeting: 'Hello!' };
  const newObject = Object.create(protoObject);
  console.log('13. Object.create:', newObject.greeting); // 'Hello!'
  
  // 15. Using Object.values on an array
  const arrayValues = Object.values(array);
  console.log('14. Object.values on array:', arrayValues); // ['apple', 'banana', 'orange']
  
  // 16. Using Object.entries on an array
  const arrayEntries = Object.entries(array);
  console.log('15. Object.entries on array:', arrayEntries);
  // [['0', 'apple'], ['1', 'banana'], ['2', 'orange']]
  