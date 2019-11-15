// JavaScript Document

function showStuff(el) {
    var elementID = document.getElementById(el);

    for (i = 0; i < elementID.length; i++) {
        if (elementID[i].selected === true) {
            var x = elementID[i].text;
            // document.getElementById('output').innerHTML = x;
        }
    } // end loop
    return x;
} // end function


function showMore() {
    var elementID = document.getElementsByName('bulb');
    console.log(elementID.length);
    for (i = 0; i < elementID.length; i++) {
        console.log(elementID[i].checked);
        console.log(elementID[i].value);
        if (elementID[i].checked === true) {

        } // end if
    } // end loop
} // end function

function evaluatePage() {
    var feedbackState = showStuff('state');
    var feedbackHome = showStuff('home');
    showMore();
    document.getElementById('output').innerHTML = feedbackState + '<br>' + feedbackHome;
} // end function
