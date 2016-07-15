$(document).ready(function(){
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger"
  ,"noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];
  for(var i=0; i<channels.length; i++){
    (function(i){
    url1 = 'https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?';
    url2 = 'https://api.twitch.tv/kraken/channels/' + channels[i] + '?callback=?';
    $.ajax({
        type:"GET",
        async: false,
        url: url1,
        dataType:"json",
        success: function(data1) {
          stream = data1.stream;  //online or offline check
        }
    });
    $.ajax({
        type:"GET",
        async: false,
        url: url2,
        dataType:"json",
        success: function(data2) {
          logo = data2.logo;
          name = data2.display_name;
          url = data2.url;
          checkstatus = data2.status;
          if(logo === null || logo == undefined){logo = "image/questionlogo.png";} 
          else{logo = data2.logo;}
          if(checkstatus === 422) {
          $("#output").append('<div id="' + channels[i].toLowerCase() + '" class="well offline"><img src="'+ logo + '"><a href="https://bitly.com/a/404t" target="_blank">  ' 
            + channels[i] + '</a><span id="acctClosedText">  Account Closed</span></div>');
          } 
          else if(stream == null){
          $("#output").append('<div id="' + channels[i].toLowerCase() + '" class="offline well"><img src="'+ logo + '"><a href="' + url + '" target="_blank">  ' 
            + name + '</a><span id="offlineText">  Offline</span></div>');
          } 
          else {
          $("#output").prepend('<div id="' + channels[i].toLowerCase() + '" class="well online"><img src="'+ logo + '"><a href="' + url + '" target="_blank">  ' 
            + name + '</a>   <span id="statusText">'+ checkstatus +'</span></div>');
          }
        }
    });
  })(i);
  }
  $("#all-button").click(function(){
    $(".online,.offline").show();
  });
  $("#online-button").click(function(){
    $(".offline").hide();
    $(".online").show();
  });
  $("#offline-button").click(function(){
    $(".online").hide();
    $(".offline").show();
  });
  $('#searchbox').keypress(function(e){
      if(e.which == 13){
        searchbox = $('#searchbox').val().toLowerCase()
        if(searchbox.length > 0){
        $("#output").children().hide();
        $('#'+searchbox).show();
        }
      }
  });

});


