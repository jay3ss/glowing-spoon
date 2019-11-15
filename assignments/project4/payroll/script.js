// Payroll Calculator
// a. Ask for the employee’s name, hours worked, and pay per hour (Use HTML
//    Inputs)
// b. Ask for the tax rate of the employee (Single 22 % or Family 18 %) (Use
//    HTML Inputs)
// c. Calculate the gross pay, the tax amount, and the net pay using functions
//    with parameters.
//          function grosspay(hours, payperhour)
//          function emptax(grosspay)
//          function netpay(empgrosspay, emptax)
// d.If the hours exceed 40 calculate the overtime at 1.5 times the pay per
//   hour. Write a overtime function

function grosspay(hours, payperhour) {
    var overtime = hours - 40;
    if (overtime > 0) {
        return (hours - overtime) * payperhour + overtime * payperhour * 1.5;
    } else {
        return hours * payperhour;
    }
}

function emptax(grosspay) {
    var eTax = document.getElementById('emptax').value;

    return eTax * grosspay;
}

function netpay(empgrosspay, eTax) {
    return empgrosspay - eTax;
}

function calculate() {
    var name = document.getElementById('name').value;
    var hours = document.getElementById('hours').value;
    var payperhour = document.getElementById('payperhour').value;

    var gPay = grosspay(hours, payperhour);
    var eTax = emptax(gPay);
    var nPay = netpay(gPay, eTax);


    // Create the results elements
    var resultsText = name + " has made $" + nPay + " for this pay period.";

    addTextToElem("titleResults", "Results");
    addTextToElem("textResults", resultsText);
}

function addTextToElem(elemId, text) {
    document.getElementById(elemId).innerText = text;
}
