// JavaScript Document

var newOptions = ["Orange", "Red", "Blue"];

var foundYou = document.getElementById('myForm');
console.log(foundYou);

var selectArray = foundYou.getElementsByTagName('option');
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
    selectArray[i].innerText = newOptions[i];
}
