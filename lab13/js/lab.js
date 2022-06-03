/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.30.2022
 * License: Public Domain
 */


function outputToPage(str) {
  $("#output").append("<p>" + str + "</p>");
}

function fizzBuzzBoom (maxNums, factorObj, outputWords) {
  for (var num=0; num<factorObj.length; num++) {
    console.log(factorObj[num]);
  }
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      console.log("Factor: " + factorObj[factor]);
      console.log("Num: " + num);
      console.log("Factor: " + factorObj[factor]);
      console.log(num % factorObj[factor]);
      if (num % factorObj[factor] == 0) {
        outputStr += outputWords[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

const list = [];
const words = [];
document.getElementById("button").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max);
  if (! max) {
    reportError("You must provide a maximum");
  }
  list.push(document.getElementById("num0").value);
  list.push(document.getElementById("num1").value);
  list.push(document.getElementById("num2").value);
  list.push(document.getElementById("num3").value);

  words.push(document.getElementById("text0").value);
  words.push(document.getElementById("text1").value);
  words.push(document.getElementById("text2").value);
  words.push(document.getElementById("text3").value);
  console.log(" ");
  console.log(document.getElementById("num0").value);
  console.log(document.getElementById("num1").value);
  console.log(document.getElementById("num2").value);
  console.log(document.getElementById("num3").value);
  console.log(" ");
  console.log(list[0]);
  console.log(list[1]);
  console.log(list[2]);
  console.log(list[3]);
  console.log(" ");
  fizzBuzzBoom(max, list, words);
})
