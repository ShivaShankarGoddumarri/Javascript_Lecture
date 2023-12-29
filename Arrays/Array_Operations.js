// Array Operations

// 1. Array.isArray()
//    checks whether an object is an array.
const myArray1 = [1, 2, 3];
console.log(Array.isArray(myArray1)); // Output: true

// 2. Array.at()
//    returns the element at a specified index in an array.
const myArray2 = ['apple', 'orange', 'banana'];
console.log(myArray2.at(1)); // Output: orange

// 3. Array.indexOf()
//    indexOf() returns the first index at which a specified element is found in the array.
const myArray3 = ['apple', 'orange', 'banana'];
const index = myArray3.indexOf('orange');
console.log(index); // Output: 1

// 4. includes()
//    includes() checks if an array includes a certain element and returns true or false.
const myArray4 = ['apple', 'orange', 'banana'];
console.log(myArray4.includes('orange')); // Output: true

// 5. Slice
//    slice extracts a section of an array and returns it as a new array.
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);   //index, (n-1)
console.log(slicedArray); // Outputs: [2, 3, 4]

// 6. Splice
//    splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const myArray6 = [1, 2, 3, 4, 5];
myArray6.splice(2, 1); // Removes one element at index 2
console.log(myArray6); // Outputs: [1, 2, 4, 5]

// 7. For Loop
//    A for loop can be used to iterate through each element in an array.
const myArray7 = [1, 2, 3];
for (let i = 0; i < myArray7.length; i++) {
  console.log(myArray7[i]); // Outputs each element in the array
}

// 8. Adding Two Arrays
//    You can concatenate two arrays using the spread operator (...) or the concat method.
const array8_1 = [1, 2];
const array8_2 = [3, 4];
const array8_3  = {"name": "Shiva"}
const combinedArray8 = [...array8_1, ...array8_2, {...array8_3}];
// or: const combinedArray8 = array8_1.concat(array8_2);
console.log(combinedArray8); // Outputs: [1, 2, 3, 4]

// 9. Push, Pop, Shift, Unshift
//    These methods modify the array by adding or removing elements from the beginning or end.
const myArray9 = [1, 2, 3];
myArray9.push(4); // Adds 4 to the end
myArray9.pop(); // Removes the last element (4)
myArray9.unshift(0); // Adds 0 to the beginning
myArray9.shift(); // Removes the first element (0)

// 10. Array to String Conversion using Join
//     join creates and returns a new string by concatenating all elements in an array.
const myArray10 = ['apple', 'orange', 'banana'];
const myString10 = myArray10.join(', '); // Joins with a comma and space
console.log(myString10); // Outputs: apple, orange, banana

// 11. Deleting Index, Changing Values, Adding Values using Splice
//     splice can be used to delete, change, or add elements at a specific index.


const myArray11 = ['apple', 'orange', 'banana'];

// Deleting index 1
myArray11.splice(1, 1);
// Changing value at index 0
myArray11.splice(0, 1, 'grape');
// Adding 'kiwi' at index 2
myArray11.splice(2, 0, 'kiwi');
console.log(myArray11); // Outputs: ['grape', 'banana', 'kiwi']


// flatmap
const arr =[
  [1,2],
  [5],
  [6,9],10
]

const newArray =array.((number) => number);
console.log(newArray )

