/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.7.2022
 * License: Public Domain
 */


var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerText = "Hello world!";
var new2El = document.createElement("p");
new2El.innerText = "This text is from new2El";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
