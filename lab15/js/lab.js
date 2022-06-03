/*
 * Author: Tracie Thornbury (tmthorb@ucsc.edu)
 * Created: 5.30.2022
 * License: Public Domain
 */

var data;
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://yesno.wtf/api",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
         $('#button').on('click',function(){
           console.log(data);
           $("#output").html(JSON.stringify(data));
         });
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
