let num = prompt("Enter a number for multiplication table:");
let result = "";
for(let i = 1; i <= 10; i++) {
    result += num + " x " + i + " = " + (num * i) + "\n";
}
alert(result);
