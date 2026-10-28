let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

alert("Using == : " + (str1 == str2));
alert("Using === : " + (str1 === str2));
alert("Using localeCompare: " + str1.localeCompare(str2));
alert("Case insensitive compare: " + (str1.toLowerCase() === str2.toLowerCase()));
