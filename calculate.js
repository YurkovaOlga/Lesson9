var first
first = prompt("enter first number");
console.log(first);

var second
second = prompt("enter second number");
console.log(second);

var firstNumber;
firstNumber = parseFloat(first);
console.log(firstNumber);

var secondNumber;
secondNumber = parseFloat(second);
console.log(secondNumber);

var sum;

if (secondNumber == 0) {
    alert("can't divide by zero!");
}
else {
    sum = firstNumber / secondNumber;
    alert("result is: " + sum);
}


