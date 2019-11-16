// JavaScript Document

var foundYou = document.querySelectorAll('ul#lp_list li');
console.log(foundYou[2].innerText);
console.log('LENGTH OF COLLECTION ' + foundYou.length);
foundYou[2].innerText = "<<I Changed You>>";
