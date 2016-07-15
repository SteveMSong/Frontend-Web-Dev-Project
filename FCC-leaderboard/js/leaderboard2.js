$(document).ready(function(){
  function recent(){
    $('#table-body').html('');
    $('#recent-header').addClass('highlight');
    $('#alltime-header').removeClass('highlight');
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data1){
      for(var i=0; i<=99; i++){
        id = i + 1;
        name = data1[i].username;
        image = data1[i].img;
        recent = data1[i].recent;
        alltime = data1[i].alltime;
        $('#table-body').append('<tr><td class="text-center">'+id+'</td><td><a target="_blank" href="http://freecodecamp.com/'+name+'"><img class="img-circle" src="'+image+'"/>'+name+'</a></td><td class="text-center">'
          +recent+'</td><td class="text-center">'+alltime+'</td></tr>');
      }
    });    
  }

  function alltime(){
    $('#table-body').html('');
    $('#alltime-header').addClass('highlight');
    $('#recent-header').removeClass('highlight');
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data2){
      for(var i=0; i<=99; i++){
        id = i + 1;
        name = data2[i].username;
        image = data2[i].img;
        recent = data2[i].recent;
        alltime = data2[i].alltime;
        $('#table-body').append('<tr><td class="text-center">'+id+'</td><td><a target="_blank" href="http://freecodecamp.com/'+name+'"><img class="img-circle" src="'+image+'"/>'+name+'</a></td><td class="text-center">'
          +recent+'</td><td class="text-center">'+alltime+'</td></tr>');
      }
    });    
  }

  recent();
  $('#recent-header').click(recent);
  $('#alltime-header').click(alltime);

});
