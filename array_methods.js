// ARRAY METHODS

let arr = [1, 2, 3, 4, 5, 6, 7];
// how to add the 8 after the 7 at athe last
//We have a method called arr.push() in this method the element is addded at the end

arr.push(8, 9);
console.log(arr); //output arr =[ 1, 2, 3, 4, 5,6, 7, 8, 9]

//  If we wat to remove last element we can remove the element at the last index
//we use pop() method to remove  element at the last index
arr.pop();
console.log(arr); //output arr =[1, 2, 3, 4, 5, 6, 7, 8];

//if we want to remove  the element at the staring of the index or the first index .
// we use the arr.shift method to remove the element
arr.shift();
console.log(arr); //output arr =    [2, 3, 4, 5, 6, 7, 8];

// if we want to add element in the start or first place of the index
//we use unshift() method to add the element
arr.unshift(10);
console.log(arr); //output arr =[  10, 2, 3, 4, 5, 6, 7, 8]

//Array modification

//we use push and pop methods to make changes in the last element element of the arr
//we use shift and unshift method to make changes in the first element of the arr

//important note that the shift and pop method return the elements which we removed from the array
let f1 = arr.pop();
console.log(f1); //output f1 [8] it return the element which is removed end
let f = arr.shift(10);
console.log(f); //output f [10] it return the element which is removed start

console.log(arr); //output final = [2, 3, 4, 5, 6, 7];

//CONCAT
//this concat() method help to comabine two different arrays into a single array

let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5];
let a3 = a1.concat(a2); // input Array                 //output Array
console.log(a1, a2, a3); //[1, 2, 3, 4, 5][(3, 4, 5)] = [(1, 2, 3, 4, 5, 3, 4, 5)];

console.log(a3); // [1, 2, 3, 4, 5, 3, 4, 5]; conact array

//how to add the strings together
let s = a3.join("@");
console.log(s); //output Array  12345345; 1@2@3@4@5@3@4@5

//reverse;
// left to right => right to left

a3.reverse(); // orignal array[1, 2, 3, 4, 5, 3, 4, 5];
console.log(a3); //after reverse applied [5, 4, 3, 5, 4, 3, 2, 1];
//IndexOf
// this method is helpful to find the index of a number

//[5, 4, 3, 5, 4, 3, 2, 1];
console.log(a3.indexOf(5)); //0
//Note: if the element is not present in the array it gives us -1 as the output
console.log(a3.indexOf(74)); // -1

//Slice method

// Returns a copy of a section of an array.
// For both start and end, a negative index can be used to indicate an offset from the end of the array.
//For example, -2 refers to the second to last element of the array.

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.slice(2, 5)); //output : [3, 4, 5];
//here 2 is the starting point the 5 is the end point
//it will return the elements between them starting element is ignored
//start to end -1 and return the array

//Splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//it takes 3 inputs (start,deletecount,insert)

//1) start — The zero-based location in the array from which to start removing elements.

//2) deleteCount — The number of elements to remove.

//3) items — Elements to insert into the array in place of the deleted elements.

//output: returns — An array containing the elements that were deleted.

let arr5 = [87, 2, 4, 5, 66, 11, 5, 54, 6];
//(startingindex, deleteCount, insertion)

arr5.splice(2, 0, 11);
console.log(arr5); //output :[87,  2, 11,  4, 5, 66, 11,  5, 54, 6]

arr5.splice(2, 2, 11); //output : [87, 2, 11, 5, 66, 11, 5, 54, 6];
//deletCount delete the number at the startingindex and replace with the inserction index

//pop():
let fruits = ["apple", "banana", "cherry"];
let last = fruits.pop();
console.log(fruits); //output: ["apple", "banana"];
console.log(last); //output:  "cherry";
//push()
let fruits1 = ["apple", "banana"];
let length = fruits1.push("cherry");
console.log(fruits1); //output: ['apple', 'banana', 'cherry']
console.log(length); //output: 3
//push
let fruits2 = ["apple", "banana"];
let length2 = fruits2.push("cherry", "orange");
console.log(fruits2); // Output: ['apple', 'banana', 'cherry', 'orange'] console.log(length2); // Output: 4

//shift
let fruits3 = ["apple", "banana", "cherry"];
let first = fruits3.shift();
console.log(fruits3); // Output: ['banana', 'cherry']
console.log(first); // Output: 'apple'
//unshift
let fruits4 = ["banana", "cherry"];
let length4 = fruits.unshift("apple");
console.log(fruits4); // Output: ['apple', 'banana', 'cherry']
console.log(length4); // Output: 3

let fruits5 = ["banana", "cherry"];
let length5 = fruits5.unshift("apple", "orange");
console.log(fruits5); // Output: ['apple', 'orange', 'banana', 'cherry'] console.log(length); // Output: 4

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6];

let array4 = [1, 2, 3];
let array5 = [4, 5, 6];
let array6 = [7, 8, 9];
let newArray2 = array4.concat(array5, array6);
console.log(newArray2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9];

//join
let fruits6 = ["apple", "banana", "cherry"];
let result = fruits6.join("-");
console.log(result); //output:apple-banana-cherry

//slice()
// The slice() method in JavaScript is used to extract a portion of an array and return a new array.
// The  original array is not modified.
// Here's the syntax for using the slice() method:
// array.slice(start, end);
// The slice() method takes two optional parameters: start and end¨
//  start is the index at which to begin extraction. If start is negative, it is treated as array.length + start¨
//  end is the index before which to end extraction. The element at this index is not included in the extracted  portion. If end is omitted, all elements from start to the end of the array will be included in the extracted  portion. If end is negative, it is treated as array.length + end.

let fruits7 = ["apple", "banana", "cherry", "orange"];
let citrus = fruits7.slice(1, 3);
console.log(fruits7); //output: ["apple", "banana", "cherry", "orange"];
console.log(citrus); //output:[ 'banana', 'cherry' ]

//It's important to note that the slice() method does not modify the original array, but returns a new  array that contains the extracted portion.

let numbers = [1, 2, 3, 4, 5];
let part = numbers.slice(2);
console.log(numbers); //[1, 2, 3, 4, 5];
console.log(part); //[ 3, 4, 5 ]
// In the example above, the slice() method is used to extract the portion of the numbers array from index 2  to the end of the array.
// The extracted portion is stored in the part array, which is[3, 4, 5]

//splice
// The splice() method in JavaScript is used to add or remove elements from an array. The method modifies  the original array and returns the removed elements (if any) in a new array.
let numbers2 = [1, 2, 3, 4, 5];
let removed = numbers2.splice(2, 2, 6, 7);
console.log(numbers2); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]
//In the example above, the splice() method is used to remove two elements (3 and 4) from the numbers  array starting at index 2, and add two elements (6 and 7) in their place. The removed elements are  returned in the removed array, which is [3, 4]. The modified numbers array is now [1, 2, 6, 7, 5].
//It's important to note that the splice() method can be used to both add and remove elements from an  array, and that it modifies the original array. This makes it a powerful tool for manipulating arrays, but  it's also important to be careful when using it to ensure that the original array is changed as intended.
//reverse
let fruits8 = ["apple", "banana", "kiwi", "mango"];
fruits8.reverse();
console.log(fruits8);
// Output: ["mango", "kiwi", "banana", "apple"]

//Note that the reverse method only reverses the order of the elements in the array and does not sort the  elements in any way. If you want to sort the elements in ascending or descending order, you should use  the Array.sort() method in conjunction with the reverse method.

//indexOf():

let fruits9 = ["apple", "banana", "kiwi", "mango"];
let index = fruits9.indexOf("kiwi");
console.log(index); //2

let fruits10 = ["apple", "banana", "kiwi", "mango", "kiwi"];
let index2 = fruits10.indexOf("kiwi", 3);
console.log(index2);
// Output: 4
// Note in indexOf method uses the strict equality operator (===) to compare the elements, so if you  are searching for a value that is not a string or number, make sure to provide the correct type. e that the inde
