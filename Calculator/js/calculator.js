$(document).ready(function(){
  $("#zero").click(function(){ 
    if($('#display').html() != '0'){
      $("#display").append('0');
    }
  });
  $("#one").click(function(){  
    $("#display").append('1');
  });
  $("#two").click(function(){  
    $("#display").append('2');
  });
  $("#three").click(function(){  
    $("#display").append('3');
  });
    $("#four").click(function(){
    $("#display").append('4');
  });
  $("#five").click(function(){
    $("#display").append('5');
  });
  $("#six").click(function(){
    $("#display").append('6');
  });
  $("#seven").click(function(){
    $("#display").append('7');
  });
  $("#eight").click(function(){
    $("#display").append('8');
  });
  $("#nine").click(function(){
    $("#display").append('9');
  });
  $("#modulus").click(function(){
    var lasttext = $('#display').html().substr(-1,1);
    if(lasttext == '%' || lasttext == '/' || lasttext == '*' || lasttext == '-' || lasttext == '+'){ 
      var res = $("#display").html().replace(lasttext,'%');
      $('#display').html(res);
    }else if($('#display').html() != ''){
      $("#display").append('%');
    }
  });
  $("#divide").click(function(){
    var lasttext = $('#display').html().substr(-1,1);
    if(lasttext == '%' || lasttext == '/' || lasttext == '*' || lasttext == '-' || lasttext == '+'){ 
      var res = $("#display").html().replace(lasttext,'/');
      $('#display').html(res);
    }else if($('#display').html() != ''){
      $("#display").append('/');
    }
  });
  $("#multiply").click(function(){
    var lasttext = $('#display').html().substr(-1,1);
    if(lasttext == '%' || lasttext == '/' || lasttext == '*' || lasttext == '-' || lasttext == '+'){ 
      var res = $("#display").html().replace(lasttext,'*');
      $('#display').html(res);
    }else if($('#display').html() != ''){
      $("#display").append('*');
    }
  });
  $("#minus").click(function(){
    var lasttext = $('#display').html().substr(-1,1);
    if(lasttext == '%' || lasttext == '/' || lasttext == '*' || lasttext == '-' || lasttext == '+'){ 
      var res = $("#display").html().replace(lasttext,'-');
      $('#display').html(res);
    }else if($('#display').html() != ''){
      $("#display").append('-');
    }
  });
  $("#plus").click(function(){  
    var lasttext = $('#display').html().substr(-1,1);
    if(lasttext == '%' || lasttext == '/' || lasttext == '*' || lasttext == '-' || lasttext == '+'){ 
      var res = $("#display").html().replace(lasttext,'+');
      $('#display').html(res);
    }else if($('#display').html() != ''){
      $("#display").append('+');
    }
  });
  $("#dot").click(function(){  
    if($('#display').html().indexOf('.') === -1){
      $("#display").append('.')
    }
  });
  $("#ac").click(function(){   
    $("#display").html('');
  });
  $("#ce").click(function(){ 
    var content = $('#display').html();
    if(content){
      trim = content.substr(0,content.length-1);
      $("#display").html(trim);
    }
  });
  $("#plusminus").click(function(){ 
    var content = $('#display').html();
    if(content){
      if($('#display').html().indexOf('-') > -1){
        attachminus = content.replace('-','');
        $("#display").html(attachminus);
      }else{
        $("#display").prepend('-');
      }
    }
  });
  $("#equals").click(function(){
    content = $('#display').html();
    result = eval(content);
    $('#display').html(result);
  });
});