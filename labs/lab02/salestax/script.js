var salesTaxRate = 0.095;
var amountAsString = prompt("What is the amount of the item? ", "");
var amount = Number(amountAsString);

var tax = salesTaxRate * amount;
var total = tax + amount;
alert("The amount is $" + amount + ", sales tax is $" + tax + ", and the total is $" + total);
