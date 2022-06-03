/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.2.2022
 * License: Public Domain
 */

 function squared(x) {
     var results = x * x
     return results;
 }

//test function
console.log("5 squared: " + squared(5));
console.log("8 squared: " + squared(8));

var array = [1, 2, 4, 8, 16]

console.log("Array squared: " + array.map(squared));

var result = array.map(function(x) {
    var results = x * 2
    return results;
})

console.log("Double array: " + result);
