let fruits = ["apple", "banana", "mango", "orange"];
alert("Original Array: " + fruits);

// Remove "banana"
let index = fruits.indexOf("banana");
if (index !== -1) {
    fruits.splice(index, 1);
}
alert("After removing 'banana': " + fruits);

// Check if array contains "mango"
let hasMango = fruits.includes("mango");
alert("Contains 'mango': " + hasMango);

// Empty the array
fruits.length = 0;
alert("After emptying: " + fruits);
