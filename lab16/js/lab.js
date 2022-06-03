/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.30.2022
 * License: Public Domain
 */

console.log("im dying");

 // Using the core $.ajax() method
 $.ajax({
   url: "https://xkcd.com/614/info.0.json",
   type: "GET",
   crossDomain: true,
   dataType: "json",
   success: function(data){
     var comicObj = data;
     $("#output").html("<h3>" + comicObj.title + "</h3><br><img src='" + comicObj.img + "'><br><p>Alt: " + comicObj.alt);
   },
   error: function(request, error){
     $("#output").html("<p>Something went wrong :(</p>");
   }
 });
