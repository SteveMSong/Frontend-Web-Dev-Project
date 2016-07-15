$(document).ready(function(){
  var tempUnit = "us";
  function getlocation(tempUnit){
    $.ajax({
        async: false,
        url: "http://ip-api.com/json",
        success: function(data) {
          latitude = data.lat;
          longitude = data.lon;
          city = data.city;
          state = data.region;
          zip = data.zip;
          timezone = data.timezone;
        }
    });
    $(".forecast").html('<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" ></iframe>');
    $("iframe").attr('src', 'http://forecast.io/embed/#lat='
    + latitude + '&lon=' + longitude 
    + '&name=' + city + ', ' + state + ' ' + zip + '&font=Georgia&color=#00aaff&units=' + tempUnit);
  } //end function

  getlocation(tempUnit);

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=fefbcdcda8a79019a50b7456a8d0f1d9", function(data1) {   
    tempK = data1.main.temp;
    tempF = (tempK-273.15)*1.8 + 32;  //Kelvin to Fahenheit

    time = data1.dt;
    date = new Date(time*1000);
    hours = date.getHours();
    minutes = "0" + date.getMinutes();
    seconds = "0" + date.getSeconds();
    formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + timezone;
    $(".lastupdated").html(formattedTime);

    condition = data1.weather[0].main;

    var images = ["image/sky.jpg",
    "image/oceanmorning.jpg",
    "image/daymountain.jpg",
    "image/cityafternoon.jpg",
    "image/bears.jpg",
    "image/curvyroads.jpg",
    "image/goldengate.jpg",
    "image/greek.jpg",
    "image/hamptons.jpg",
    "image/oceanscene.jpg",
    "image/realmonte.jpg", 
    "image/sahara.jpg", 
    "image/yacht.jpg", 
    "image/yosemite.jpg",
    "image/cityday.jpg",
    "image/lakemorning.jpg",
    "image/oceandawn.jpg",
    "image/balloon.jpg",
    "image/surfing.jpg", 
    "image/snowsnow.jpg",
    "image/pv.jpg",
    "image/desert.jpg",
    "image/jordan.jpg",
    "image/coast.jpg",
    "image/mandog.jpg",
    "image/waves.jpg",
    "image/guggenheim.jpg",
    "image/louisiana.jpg",
    "image/pineapple.jpg",
    "image/fogmountain.jpg",
    "image/deermountain.jpg",
    "image/bliss.jpg",
    "image/google.jpg",
    "image/londong.jpg",
    "image/rockwater.jpg",
    "image/frozenberry.jpg",
    "image/soccer.jpg",
    "image/oldtv.jpg",
    "image/splash.jpg",
    "image/endes.jpg",
    "image/pv2.jpg",
    "image/yosemite2.jpg",
    "image/nightdesert.jpg",
    "image/alps.jpg",
    "image/fog.jpg",
    "image/manchild.jpg",
    "image/island.jpg",
    "image/coolscene.jpg",
    "image/trainstation.jpg",
    "image/project3.jpg"];
    var randomNum = Math.floor(Math.random()*images.length);
    var randomImage = images[randomNum];
    if(condition == 'Rain'){
      $("body").css("background-image", 'url(image/rain3.jpg)');
    }
    else if(condition == 'Snow'){
      var snowimages = ["image/snowcablecar.jpg",
      "image/snowcamping.jpg",
      "image/snowmountain.jpg",
      "image/elevation.jpg"];
       var randomNum = Math.floor(Math.random()*snowimages.length);
       var randomImage = snowimages[randomNum];
      $("body").css("background-image", 'url('+ randomImage + ')');
    }
    else if (5 < hours && hours < 8){
        $("body").css("background-image", 'url('+ randomImage + ')');
    } else if (8 < hours && hours < 12) {
        $("body").css("background-image", 'url('+ randomImage + ')');
    } else if (12 < hours && hours < 18) {
        $("body").css("background-image", 'url('+ randomImage + ')');
    } else if (18 < hours && hours < 20) {
        $("body").css("background-image", 'url('+ randomImage + ')');
    } else {
        var nightimages = ["image/sfnight.jpg","image/cityafternoon.jpg"];
        var randomNum = Math.floor(Math.random()*images.length);
        var randomImage = images[randomNum];
        $("body").css("background-image", 'url('+ randomImage + ')');
    }
  });

  $('#slidebutton').on('change', function() { 
    if(tempUnit === 'us'){
      tempUnit = 'uk';
      parse = $(".forecast").html();
      result = parse.replace("units=us","units="+tempUnit);
    }else {
      tempUnit = 'us';
      parse = $(".forecast").html();
      result = parse.replace("units=uk","units="+tempUnit);
    }
    $(".forecast").html(result);
    //getlocation(tempUnit);
  });

  $("#myModal2").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
  });

});
//depending on temperature background is different(random) -- may need to change color of fonts to match backgrnd
  
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp*1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();
// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// $(document).ready(function() {
//   $("#getMessage").on("click", function(){
//     $.getJSON("/json/cats.json", function(json) {
//     $(".message").html(JSON.stringify(json));
//     });
//   });
// });
// ---------------------------------------------
// json.forEach(function(val) {
//   var keys = Object.keys(val);  //array of key
//   html += "<div class = 'cat'>";
//   keys.forEach(function(key) {
//     html += "<b>" + key + "</b>: " + val[key] + "<br>";
//   });
//   html += "</div><br>";
// });
// -----------------------------------------
//   $(document).ready(function() {
//     $("#getMessage").on("click", function() {
//       $.getJSON("/json/cats.json", function(json) {
//         var html = "";
//         json = json.filter(function(val) {
//         return (val.id !== 1);
//         });
//         json.forEach(function(val) {
//           html += "<div class = 'cat'>"
//           html += "<img src = '" + val.imageLink + "'>"
//           html += "</div>"
//         });
//         $(".message").html(html);
//       });
//     });
//   });