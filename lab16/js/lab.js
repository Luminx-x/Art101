/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.30.2022
 * License: Public Domain
 */


 // Using the core $.ajax() method
 $.ajax({
   url: "http://xkcd.com/info.0.json",
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