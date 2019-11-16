/*jslint browser:true */
"use strict";

function calculatePaycheck() {
    // Get the data entered into the Weekly Time Sheet
    var empName = addName('empName');
    var hoursWorked = addHours('wts');
    var empPayRate = payRate('payRate');
    var empTaxRate = taxRate();

    // Calculate payroll information
    var empGrossPay = grossPay(hoursWorked, empPayRate);
    var empTaxes = taxes(empGrossPay, empTaxRate);
    var empNetPay = netPay(empGrossPay, empTaxes);

    var empInfo = [
        empName, hoursWorked, empTaxes, empNetPay
    ];

    // Display the results as HTML
    displayResults(empInfo);
}

// Returns the name of the employee entered into the Weekly Time Sheet
function addName(name) {
    var empName = document.getElementsByName(name)[0].value;
    return empName;
}

// Returns the number of hours worked entered into the Weekly Time Sheet
function addHours(elemId) {
    var days = document.getElementById(elemId).getElementsByTagName('input');
    var hours = 0;
    for (var i = 0; i < days.length; i++) {
        hours += Number(days[i].value);
    }

    return hours;
}

// Returns the employee's pay rate entered into the Weekly Time Sheet
function payRate(elemName) {
    var pr = Number(document.getElementsByName(elemName)[0].value);
    return pr;
}

// Returns the tax rate (as a percentage) selected in the Weekly Time Sheet
function taxRate() {
    var taxRateChoice = document.forms.payrollForm.panel.selectedIndex;
    var taxRateOptions = document.forms.payrollForm.panel.options;
    var tr = taxRateOptions[taxRateChoice].value / 100; // Convert to percentage
    return tr;
}

// Calculates and returns the employee's gross pay
// taxes = hours * pay rate
function grossPay(hours, empPayRate) {
    return hours * empPayRate;
}

// Calculates and returns the taxes
// taxes = gross pay * tax rate
function taxes(grossPay, empTaxRate) {
    return grossPay * empTaxRate;
}

// Calculates and returns the employee's net pay
// net pay = gross pay - taxes
function netPay(empGrossPay, empTaxes) {
    return empGrossPay - empTaxes;
}

// Displays the results of the calculations by appending HTML to
// the div element with the id of feedback
function displayResults(empInfo) {
    var feedback = createDataTable(empInfo);
    addHtml('feedback', feedback);
}

function createDataTable(empInfo) {
    var empName = empInfo[0];
    var hoursWorked = empInfo[1];
    var empTaxes = empInfo[2];
    var empNetPay = empInfo[3];

    var dataTable = "";
    dataTable += "<table id=\"feedbackTable\"><tbody>";
    dataTable += "<tr><th>Name</th><td>" + empName + "</td></tr>";
    dataTable += "<tr><th>Total Hours</th><td>" + hoursWorked + "</td></tr>";
    dataTable += "<tr><th>Total Taxes</th><td>" + numAsCurrency(empTaxes) + "</td></tr>";
    dataTable += "<tr><th>Net Pay</th><td>" + numAsCurrency(empNetPay) + "</td></tr>";
    dataTable += "</tbody></table>";

    return dataTable;
}

// Adds HTML to the given element ID
function addHtml(elemId, html) {
    var elem = document.getElementById(elemId);
    elem.innerHTML = html;
}

// Converts and returns a number to a currency string. E.g.,
// 123.4567 -> $123.46
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

    // Create the currency string: $dollars.cents
    var currency = "$" + dollars + ".";

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
