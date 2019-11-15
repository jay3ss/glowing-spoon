
// Set an initial balance of $1000
// Create functions for all operations:
//      balanceCheck()
//      withdraw(amount)
//      deposit(amount)
// Make sure to validate for overdraft

function canWithdraw(amount) {
    return balanceCheck() - amount >= 0;
}

function balanceCheck() {
    return parseFloat(document.getElementById('balance').innerText);
}

function withdraw(amount) {
    if (canWithdraw(amount)) {
        var newBalance = balanceCheck() - amount;
        updateBalance(newBalance);
    }
}

function deposit(amount) {
    var newBalance = balanceCheck() + amount;
    updateBalance(newBalance);
}

function updateBalance(newBalance) {
    document.getElementById('balance').innerText = newBalance;
}

function submit() {
    // With help from https://stackoverflow.com/a/15839451/3562890
    var operation = document.querySelector('input[name="operation"]:checked').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (operation === "withdraw") {
        withdraw(amount);
    } else {
        deposit(amount);
    }
}
