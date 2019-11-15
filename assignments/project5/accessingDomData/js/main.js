// JavaScript Document
var elementID = document.getElementById('state');
console.log(elementID);

console.log(elementID.length);

// console.log(elementID[2].text);
// console.log(elementID[2].value);


for (i = 0; i < elementID.length; i++) {
    console.log(elementID[i].text);
    console.log(elementID[i].value);
}
