/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.12.2022
 * License: Public Domain
 */

var chalSpec = false;
var probSpec = false;
var resSpec = false;

function chal() {
   $("#output").html("The challenge for this lab was to create buttons using jQuery and have an event listener take action on them.");
   if(chalSpec == false) {
     $("#output").attr("class", "special");
     chalSpec = true;
   }
   else {
     $("#output").attr("class", "mainDiv");
     chalSpec = false;
   }
}

function prob() {
   $("#output1").html("The part I struggled most with this lab was the identifiers, I couldn't figure out why my code wasn't interacting with the page, but it was because I wasn't properly telling it where to go.");
   if(probSpec == false) {
     $("#output1").attr("class", "special");
     probSpec = true;
   }
   else {
     $("#output1").attr("class", "mainDiv");
     probSpec = false;
   }
}

function res() {
   $("#output2").html("You're looking at the results! I hope they show :)");
   if(resSpec == false) {
     $("#output2").attr("class", "special");
     resSpec = true;
   }
   else {
     $("#output2").attr("class", "mainDiv");
     resSpec = false;
   }
}


$('#swag').on('click',function(){
    var r=$('<input/>').attr({
        type: "button",
        id: "chal",
        value:"Challenges!",
        onclick: "chal()"
    });
    $("#challenge").append(r);

    var r1=$('<input/>').attr({
        type: "button",
        id: "prob",
        value:"Problems!",
        onclick: "prob()"
    });
    $("#problems").append(r1);

    var r2=$('<input/>').attr({
        type: "button",
        id: "res",
        value:"Results!",
        onclick: "res()"
    });
    $("#results").append(r2);
});
