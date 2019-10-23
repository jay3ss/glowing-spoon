var age = Number(prompt("What is your age? ", ""));

var string = "";
while (age > 0)
{
    string += "Happy Birthday \n";
    age -= 1;
}

alert(string);
