//Find the last element of the following arrays.
arr1 = [3,7,34,90,12];
let arrs = arr1[arr1.length -1];
console.log(arrs);

arr2 = [true, "green", "where",12,56];
let arrs2 = arr2[arr2.length -1];
console.log(arrs2);

// Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
myPets1 = myPets.join(", ")
console.log(myPets1)

// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
console.log(arr3);

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let removeDuplicate = new Set(arr);
let removedDuplicate = [...removeDuplicate];
console.log(removedDuplicate);

let dupArr = arr.filter((value, index) => arr.indexOf(value) !==index);
console.log(dupArr);

// Write a JS script to search for the following word in the array.
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let sW = "x";
if(arr5.indexOf((sW) !== -1)){
    console.log(sW);
} else {
    console.log("the search word was not found");
}

// Write a JS script to sort the following string
let word = "sevink";
let word1 = word.split("")
console.log(word1)
word1.sort()
let word2 = word1.join("")
console.log(word2)