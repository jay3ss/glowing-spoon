// JavaScript Document

var foundYou = document.getElementById('myForm');
console.log(foundYou);

var selectArray = foundYou.getElementsByTagName('input');
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
    console.log(selectArray[i].value);
}
