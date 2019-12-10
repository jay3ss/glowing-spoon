/*jslint browser:true */
"use strict";

//Initialize callback functions
$(document).ready(function () {
    $('#btnDeposit').on('click', function () {
        clearErrors();
        depositMoney();
    });

    $('#btnWithdraw').on('click', function () {
        clearErrors();
        withdrawMoney();
    });
});

// Callback function to handle the "Deposit" button
function depositMoney() {
    var amount = parseFloat($('#deposit input').val(), 10);
    deposit(amount)
}

// Callback function to handle the "Withdraw" button
function withdrawMoney() {
    var amount = parseFloat($('#withdrawal input').val(), 10);
    withdraw(amount);
}

// Adds text to the given element
function addText(elem, html) {
    $(elem).text(html);
}

// Checks if a withdrawal can take place by subtracting the amount from
// the balance and seeing if it results in a negative balance
function canWithdraw(amount) {
    return balance() - amount >= 0;
}

// Returns the balance
function balance() {
    return parseFloat($('#balance').text(), 10);
}

// Withdraws the amount given by the user. If the amount will
// result in an overdraft then an error is displayed and the
// withdrawal is not carried out
function withdraw(amount) {
    if (canWithdraw(amount)) {
        updateBalance(balance() - amount);
    } else {
        overdraftError();
    }
}

// Sets an error message stating that the user is attempting to overdraft
function overdraftError() {
    setErrorMsg('ERROR: You are trying to withdraw more than your balance');
}

// Clears any errors
function clearErrors() {
    setErrorMsg('');
}

// Sets an error message to the div with the id of errors
function setErrorMsg(msg) {
    addText('#errors', msg);
}

// Deposits the amount given by the user
function deposit(amount) {
    var newBalance = numAsCurrency(balance() + amount);
    updateBalance(newBalance);
}

function updateBalance(newBalance) {
    var balAsCurrency = numAsCurrency(newBalance);
    addText('#balance', balAsCurrency);
}

// Converts and returns a number to a currency string. E.g.,
// 123.4567 -> 123.46
function numAsCurrency(num) {
    // Extract the dollar and cents values
    // Remove the dollar amount from the number by rounding down to the
    // ones place
    var dollars = Math.floor(num);

    // Remove the cents amount from the number by:
    // 1. Subtract the dollar amount
    // 2. Multiply the result by 100
    // 3. Round the result to the nearest ones place
    var cents = Math.round((num - dollars) * 100);

    // Create the currency string: dollars.cents
    var currency = dollars + ".";

    if (cents < 10) {
        // If there are less than 10 cents, then we need to concatenate a
        // zero to the currency string BEFORE we concatenate the cents value
        currency += "0" + cents;
    } else {
        // If there are more than 10 cents, then we can just concatenate
        // the cents straight away
        currency += cents;
    }
    return currency;
}
