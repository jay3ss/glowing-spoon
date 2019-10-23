var number = 4;
var guessPrompt = "Please guess a number between 1 and 10: ";
var loseMessage = "You've exhausted all of your guesses.";
var wrongMessage = "You didn't guess correctly. ";
var winMessage = "You guessed the correct number. Congrats!";

var guessAsString = prompt(guessPrompt, "");
var guess = Number(guessAsString);

if (guess == number) {
    alert(winMessage);
} else {
    guessAsString = prompt(wrongMessage + guessPrompt, "");
    guess = Number(guessAsString);

    if (guess == number) {
        alert(winMessage);
    } else {
        guessAsString = prompt(wrongMessage + guessPrompt, "");
        guess = Number(guessAsString);

        if (guess == number) {
            alert(winMessage);
        } else {
            alert(loseMessage);
        }
    }
}
