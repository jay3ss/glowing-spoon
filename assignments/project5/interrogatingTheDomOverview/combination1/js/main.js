// JavaScript Document

var foundYou = document.getElementById('sw_list');
console.log(foundYou);
var childArray = foundYou.getElementsByTagName('li');
console.log(childArray);
childArray[0].innerText = ">>These Items";
childArray[1].innerText = ">>Have Just";
childArray[2].innerText = ">>Been Changed";
