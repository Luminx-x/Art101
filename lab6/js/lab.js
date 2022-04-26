/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 4.25.2022
 * License: Public Domain
 */

//Define variables
myTransport = ["UCSC Bus System", " Uber", " Walking", " Rides from Roomates"];

myMainRide = {
  make: "UCSC",
  model: "Loop Bus",
  color: "White",
  year: 1982,
  age: function() {
      return 2022 - age;
  }
};

//Output
document.writeln("Getting around: " +  myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
