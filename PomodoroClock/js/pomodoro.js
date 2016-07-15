$(document).ready(function(){
  $("#breakDecrease").click(function(){ 
    if(running === false){
      number = eval($('#breakTime').html());
      if(number >= 2){
        newNumber = number - 1;
        $("#breakTime").html(newNumber);
        if(breaksession === true){
          $('#time').html(newNumber+':00');
        }
      }  
    }    
  });
  $("#breakIncrease").click(function(){  
    if(running === false){
      number = eval($('#breakTime').html());
      newNumber = number + 1;
      $("#breakTime").html(newNumber); 
      if(breaksession === true){
        $('#time').html(newNumber+':00'); 
      }      
    } 
  });
  $("#sessionDecrease").click(function(){ 
    if(running === false){
      number = eval($('#sessionTime').html());
      if(number >= 2){
        newNumber = number - 1;
        $("#sessionTime").html(newNumber);
        if(breaksession === false){
          $('#time').html(newNumber+':00');
        }
      }
    }  
  });
  $("#sessionIncrease").click(function(){  
    if(running === false){
      number = eval($('#sessionTime').html());
      newNumber = number + 1;
      $("#sessionTime").html(newNumber);
      if(breaksession === false){
        $('#time').html(newNumber+':00');    
      }
    }  
  });

  var running = false, session = false, breaksession = false;

  $("#circle").click(function(){
    if(running === false){
      if(session === true){
        running = true;
        sessionCountdown = setInterval(countDown,1000);
      }else if(breaksession === true){
        running = true;
        breakCountdown = setInterval(countDown,1000);
      }else{
        sessionStart();
      }
    }else if(running === true){
      if(session === true){
        clearInterval(sessionCountdown);
        running = false;
      }else if(breaksession === true){
        clearInterval(breakCountdown);
        running = false;
      }
    }
  });
  function countDown(){
    timeArr = $('#time').html().split(':');
    minute = parseInt(timeArr[0]);
    second = parseInt(timeArr[1]);
    totalSecond = (minute * 60) + second;
    starttime = totalSecond;
    totalSecond--;

    if (session === true) {
      startTime = $('#sessionTime').html() * 60;
      water = 'rgba(235,240,243,0.5)';
    }
    if (breaksession === true) {
      startTime = $('#breakTime').html() * 60;
      water = 'rgba(255, 0, 0, 0.5)';
    }

    fraction = 1 - (totalSecond/startTime);

    $('#progress').waterbubble({
      data: fraction,
      animation: false,
      waterColor: water,
    });

    minutes = Math.floor(totalSecond/60);
    seconds = totalSecond - minutes * 60;
    $('#time').html(pad(minutes) + ':' +pad(seconds));
    
    if(totalSecond <= 0){
      if(session === true){
        clearInterval(sessionCountdown);  
        beep();
        session = false, breaksession = false, running = false;
        breakStart();
      }else{
        clearInterval(breakCountdown);
        beep();
        session = false, breaksession = false, running = false;
        sessionStart();
      }
    }
  }
  function sessionStart(){
    session = true, breaksession = false, running = true;
    $('#status').html('Session');
    sessionNumber = $('#sessionTime').html();
    $('#time').html(sessionNumber+':00');
    sessionCountdown = setInterval(countDown,1000);
  }  
  function breakStart(){
    breaksession = true, session = false, running = true;
    $('#status').html('Break!');
    breakNumber = $('#breakTime').html();
    $('#time').html(breakNumber+':00');
    breakCountdown = setInterval(countDown,1000);
  }
  var audio = new Audio('http://soundbible.com/grab.php?id=2084&type=mp3');
  function beep() {
    audio.play();
  }
  function pad(val) {
    return ('00' + val).slice(-2);
  }
});
