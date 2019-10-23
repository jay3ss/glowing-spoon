var number = Number(prompt("Enter a positive number: ", ""));
number = number > 0 ? number : 10;

for (var theNumber = number; theNumber > 0; theNumber -= 1)
{
    alert(theNumber);
}
