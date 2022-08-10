var month;
month = prompt("enter month number from 1 to 12");
console.log(month);
if ((month < 3 || month == 12)&&(month>=1)){
alert("It is a winter");
} else if (month > 2 && month < 6){
alert("It is a spring");
} else if (month > 5 && month < 9){
 alert("It is a summer")
} else if (month > 8 && month < 12){
alert("It is an autumn");
} else alert("It's not the season");
