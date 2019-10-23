var number = Number(prompt("Enter a positive number: ", ""));
number = number > 0 ? number : 10;

while (number > 0)
{
    alert(number);
    number -= 1;
}
