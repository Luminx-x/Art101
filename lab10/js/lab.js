/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.9.2022
 * License: Public Domain
 */

var userNameForm = document.getElementById("user-name").value;
var age = document.getElementById("age").value;
var creditCard = document.getElementById("credit-card").value;


console.log(userNameForm);
console.log(age);
console.log(creditCard);

var myButton = document.getElementById("my-button");

var output = document.getElementById("output");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");

myButton.addEventListener('click', function() {
  output.innerText = sortUserName();
  output1.innerText = age;
  output2.innerText = creditCard;
});


function sortUserName() {
 var userName = userNameForm;
 console.log("userName =", userName);

 var nameArray = userName.split('');
 console.log("nameArray =", nameArray);

 var nameArraySort = nameArray.sort();
 console.log("nameArraySort =", nameArraySort);

 var nameSorted = nameArraySort.join('');
 console.log("nameSorted =", nameSorted);

 return nameSorted;
}
