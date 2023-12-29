// String_Operations

// 1. Length
//    used to get the number of characters in a string.
const myString1 = "Hello, World!";
console.log(myString1.length); // 

// 2. For Loop
//  used to iterate through each character in a string.
const myString2 = "Hello";
for (let i = 0; i < myString2.length; i++) {
  console.log(myString2[i]); // Outputs each character in the string
}

// 3. Map
//    used to transform each character in a string.
const myString3 = "123";
const numberArray = Array.from(myString3).map(Number);
console.log(numberArray); // Outputs: [1, 2, 3]

// 4. IndexOf
//   returns the first index at which a given element can be found in the array.
const myString4 = "Hello, World!";
const index = myString4.indexOf("W");
console.log(index); // Outputs: 7

// 5. Lateral Strings (${})
//    Template literals allow embedding expressions inside string literals.
const name = "John";
console.log(`Hello, ${name}!`); // Outputs: Hello, John!

// 6. Slice
//   extracts a section of a string and returns it as a new string.
const myString6 = "Hello, World!";
const slicedString = myString6.slice(0, 5);
console.log(slicedString); // Outputs: Hello

// 7. String to Number Conversion using (+)
//    Using the + operator converts a numeric string to a number.
const numericString = "42";
const numberValue = +numericString;
console.log(numberValue); // Outputs: 42

// Question
console.log(3+3)     // 6
console.log("3"+"3")  // 33
console.log(3+"3") //33

console.log("3"+3 -"3")      //30
console.log(3+ +"3")        //6

// 8. Converting Strings to Arrays using Split
//    split divides a string into an array of substrings based on a specified delimiter.
const myString8 = "apple,orange,banana";
const fruitArray = myString8.split(",");
console.log(fruitArray); // Outputs: ['apple', 'orange', 'banana']





