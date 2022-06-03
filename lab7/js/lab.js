/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 4.27.2022
 * License: Public Domain
 */

function sortUserName() {
  var userName = window.prompt("Hi, please tell me your name");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}



document.writeln("Here is your fixed name: ",
  sortUserName(), "</br>");
