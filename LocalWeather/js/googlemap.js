function initMap() {
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
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: latitude+10.0781096, lng: longitude-17.754386},
    zoom: 5
  });
  google.maps.event.addListener(map, "dblclick", function(e){
    var lat = e.latLng.lat();
    var lon = e.latLng.lng();
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=fefbcdcda8a79019a50b7456a8d0f1d9", function(data1) {   
      city = data1.name;
      country = data1.sys.country;
    
      var tempUnit = "us";
      $(".forecast").html('<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" ></iframe>');
      $("iframe").attr('src', 'http://forecast.io/embed/#lat='
      + lat + '&lon=' + lon 
      + '&name=' + city + ', ' + country + '&font=Georgia&color=#00aaff&units=' + tempUnit);
    });
  });
}

