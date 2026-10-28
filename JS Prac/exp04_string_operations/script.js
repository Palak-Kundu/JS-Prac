let str = prompt("Enter a string:");

let reversed = str.split("").reverse().join("");
alert("Reversed String: " + reversed);

let replaced = str.replace(/a/g, "x");
alert("Replaced String: " + replaced);

if(str === reversed) {
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
}
