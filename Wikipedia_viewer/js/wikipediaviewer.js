$(document).ready(function(){
  $("#search").click(function(){
    searchTerm = $('#searchTerm').val();
    url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?",function(data){
      $("#output").html('');
      for(var i=0; i<data[3].length; i++){
        $("#output").append('<div class="appendout well"><a href="' + data[3][i] + '" target="_blank">' + data[1][i] + '</a><br>' + data[2][i] + '</div>');
      }
      if(searchTerm.length>0 && data[1] == ''){
        $("#output").append('<div class="nomatch well">Sorry, there is no matching result.</div>');
      }   
    });
  });

  $('#searchTerm').keypress(function(e){
      if(e.which == 13){//Enter key pressed
          $('#search').click();//Trigger search button click event
      }
  });

});
// $.ajax({
//     type:"GET",
//     async: true,
//     url: url,
//     dataType:"json",
//     success: function(data) {
//     //console.log(data);
//     $("#output").html(url);
//     }
// });

//To Do
//Look for cool jquery animation on youtube

 


