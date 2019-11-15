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


function evaluatePage() {
    var feedbackState = showStuff('state');
    var feedbackHome = showStuff('home');
    document.getElementById('output').innerHTML = feedbackState + '<br>' + feedbackHome;
}
