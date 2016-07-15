$(document).ready(function(){
  var on = false;
  var strict = false;
  var locked = true;
  var count = 0;
  var randomSequence = [];
  var playerSequence = [];
  var colorSequence = [];
  var soundSequence = [];
  var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var audioBuzzer = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_fireworks.wav');
  var audioWin = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav');
  function playSound(sound) {
    sound.play();
  }
  $('#slide-button').change(function() {
    $('#display').toggleClass('display-on');
    if(on === false){
      on = true;
    }else{
      on = false;
      $('#display').html('- -');
      exit();
    }
  })
  $('.quarter1').mousedown(function(){
    if(on === true && locked === false){
      playSound(audio1);
      $('.quarter1').toggleClass('green-pressed');
    }
    }).mouseup(function(){
      if(on === true && locked === false){
        $('.quarter1').toggleClass('green-pressed');
        playerSequence.push('.quarter1');
        compareSequence();
      }
    });
  $('.quarter2').mousedown(function(){
    if(on === true && locked === false){
      playSound(audio2);
      $('.quarter2').toggleClass('red-pressed');
    }
    }).mouseup(function(){
      if(on === true && locked === false){
        $('.quarter2').toggleClass('red-pressed');  
        playerSequence.push('.quarter2');
        compareSequence();
      } 
    });
  $('.quarter3').mousedown(function(){
    if(on === true && locked === false){
      playSound(audio3);
      $('.quarter3').toggleClass('yellow-pressed');
    }
    }).mouseup(function(){
      if(on === true && locked === false){
        $('.quarter3').toggleClass('yellow-pressed');
        playerSequence.push('.quarter3');
        compareSequence();   
      } 
    });
  $('.quarter4').mousedown(function(){
    if(on === true && locked === false){
      playSound(audio4);
      $('.quarter4').toggleClass('blue-pressed');
    }
    }).mouseup(function(){
      if(on === true && locked === false){
        $('.quarter4').toggleClass('blue-pressed'); 
        playerSequence.push('.quarter4');
        compareSequence();
      }   
    });
  $('#strict').click(function(){
    if(on === true){
      $('#strict-indicator').toggleClass('strict-on');
      if(strict === false){
        strict = true;
      }else{
        strict = false;
      }
    }
  });
  $('#start').click(function(){
    if(on === true){
      blinkStart();
      reset();
      round();
    }
  });
  function round(){
    tiles = ['.quarter1','.quarter2','.quarter3','.quarter4'];
    colors = ['green-pressed','red-pressed','yellow-pressed','blue-pressed'];
    count += 1;
    setTimeout(function(){$('#display').html(count);},1000);
    randomNum = Math.floor(Math.random()*tiles.length);
    var sound = 'audio' + (randomNum +1).toString();
    randomSequence.push(tiles[randomNum]);
    colorSequence.push(colors[randomNum]);
    soundSequence.push(sound);
    runSequence();
  }
  function compareSequence(){
    if(playerSequence.length === randomSequence.length 
      && playerSequence[count-1] === randomSequence[count-1]){
      locked = true;
      playerSequence = [];
      if(count == 20){
        $('#display').html('win!');
        playSound(audioWin);
        //win = true;
        reset(); 
      }else{
        round();
      }
    }else if(playerSequence[playerSequence.length-1] !== randomSequence[playerSequence.length-1]){
      locked = true;
      $('#display').html('!!!');
      playerSequence = [];
      playSound(audioBuzzer);
      if(strict === true){
        reset();
        round();
      }else{
        setTimeout(function(){
          $('#display').html(count);
          runSequence();
        },2000);
      }
    }
  }
  function runSequence(){
    for(var i=0; i<randomSequence.length; i++){
      (function(i){
      setTimeout(function(){
        playSound(eval(soundSequence[i]));               //make sound
        $(randomSequence[i]).addClass(colorSequence[i])  //highlight tiles
        removeColor(i);                                  //remove tile highlight
        if(i==randomSequence.length-1){
          locked = false;
        }
      },speedInc(count) * (i+1));
      function removeColor(i){
        setTimeout(function(){
          $(randomSequence[i]).removeClass(colorSequence[i]);
        }, speedInc(count)/2.5);
      }
      })(i);
    }
  }
  function reset(){
    count = 0;
    randomSequence = [];
    playerSequence = [];
    colorSequence = [];
    soundSequence = [];
    on = true;
    locked = true;
  }
  function exit(){
    count = 0;
    randomSequence = [];
    playerSequence = [];
    colorSequence = [];
    soundSequence = [];
    on = false;
    locked = true;
    strict = false;
  }
  function speedInc(count){
    if(count>=4){
      speed = 750;
    }else if(count>=8){
      speed = 500;
    }else if(count>=12){
      speed = 300;
    }else{
      speed = 1000;
    }
    return speed;
  }
  function blinkStart(){
    $('#display').html('- -');
    $('#display').removeClass('display-on');
    setTimeout(function(){$('#display').addClass('display-on');},400);
  }
});


