var one;
var oneFloat;
one = prompt("enter the first number");
oneFloat = parseFloat(one);
var two;
var twoFloat;
two = prompt("enter the second number");
twoFloat = parseFloat(two);
var three;
var threeFloat;
three = prompt("enter the third number");
threeFloat = parseFloat(three);
if ((oneFloat > twoFloat)&&(oneFloat > threeFloat)) alert(`${oneFloat} is the maximum number`);
if ((twoFloat > threeFloat)&&(twoFloat > oneFloat)) alert(`${twoFloat} is the maximum number`);
if ((threeFloat > oneFloat)&&(threeFloat > twoFloat)) alert(`${threeFloat} is the maximum number`);

