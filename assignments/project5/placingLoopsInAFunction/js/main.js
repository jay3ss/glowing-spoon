// JavaScript Document

function showStuff(el) {
    var elementID = document.getElementById(el);

    for (i = 0; i < elementID.length; i++) {
        console.log(elementID[i].text);
        console.log(elementID[i].value);
        console.log(elementID[i].selected);
    } // end loop
} // end function

// showStuff('state');

// showStuff('home');

function evaluatePage() {
    showStuff('state');
    showStuff('home');
}
