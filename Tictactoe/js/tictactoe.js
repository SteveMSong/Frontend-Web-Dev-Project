$(document).ready(function(){
  var currentPlayer = player; 
  var moves = 1; 
  var gameOver = false;
  var player = '';
  var computer = '';

  $('.selectX').click(function(){
    player = 'x'; 
    computer = 'o';
    clearBoard();
  });
  $('.selectO').click(function(){
    player = 'o';
    computer = 'x';
    clearBoard();
  });

  $('.block').click(function(){
    if(player){
      var id = $(this).attr('id');
      if (!$('#' + id).hasClass('clicked')) {
        $('#' + id).addClass('clicked');
        $('#'+id).html(player);
        moves += 1;
        checkWin();

        currentPlayer = computer;

        if (gameOver === false && moves % 2 === 0) {
          machineAI();
          moves += 1;
          checkWin();
          currentPlayer = player;
        }
      }
    }
  });
  function checkWin() {
    switch (true) {
      case $('#top-left').text() === currentPlayer && $('#top-middle').text() === currentPlayer &&
      $('#top-right').text() === currentPlayer:
        DrawLine('#top-left', '#top-middle', '#top-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#middle-left').text() === currentPlayer && $('#middle-middle').text() === currentPlayer &&
      $('#middle-right').text() === currentPlayer:
        DrawLine('#middle-left', '#middle-middle', '#middle-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#bottom-left').text() === currentPlayer && $('#bottom-middle').text() === currentPlayer &&
      $('#bottom-right').text() === currentPlayer:
        DrawLine('#bottom-left', '#bottom-middle', '#bottom-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#top-left').text() === currentPlayer && $('#middle-left').text() === currentPlayer &&
      $('#bottom-left').text() === currentPlayer:
        DrawLine('#top-left', '#middle-left', '#bottom-left');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#top-middle').text() === currentPlayer && $('#middle-middle').text() === currentPlayer &&
      $('#bottom-middle').text() === currentPlayer:
        DrawLine('#top-middle', '#middle-middle', '#bottom-middle');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#top-right').text() === currentPlayer && $('#middle-right').text() === currentPlayer &&
      $('#bottom-right').text() === currentPlayer:
        DrawLine('#top-right', '#middle-right', '#bottom-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#top-left').text() === currentPlayer && $('#middle-middle').text() === currentPlayer &&
      $('#bottom-right').text() === currentPlayer:
        DrawLine('#top-left', '#middle-middle', '#bottom-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      case $('#bottom-left').text() === currentPlayer && $('#middle-middle').text() === currentPlayer &&
      $('#top-right').text() === currentPlayer:
        DrawLine('#bottom-left', '#middle-middle', '#top-right');
        setTimeout(clearBoard, 4000);
        gameOver = true;
        break;
      default:
        drawChecker();
    }
  };
  function drawChecker(){
    if(moves === 9){
      $('.block').addClass('tie');
      $('.block').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
      setTimeout(clearBoard, 4000);
    }
  }
  function DrawLine(pos1, pos2, pos3) {
    $(pos1).addClass('winningRow');
    $(pos2).addClass('winningRow');
    $(pos3).addClass('winningRow');
    $(pos1).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    $(pos2).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    $(pos3).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
  }
  function clearBoard(){
    $('.block').empty();
    $('div').removeClass('winningRow');
    $('.block').removeClass('clicked'); 
    $('.block').removeClass('tie');
    moves = 1;
    gameOver = false;
    currentPlayer = player;
    machineAI();
  }
  function machineAI() {
    var grid = ['#top-left','#top-middle','#top-right','#middle-left','#middle-middle','#middle-right'
    ,'#bottom-left','#bottom-middle','#bottom-right'];
    var acted = false;

    while(acted !== true){
      randomNum = Math.floor(Math.random()*grid.length);
      randomGrid = grid[randomNum];

      if($('#top-left').html() == computer && $('#top-middle').html() == computer && !$('#top-right').hasClass('clicked')){//check if you can win
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == computer && $('#top-right').html() == computer && !$('#top-middle').hasClass('clicked')){ 
        $('#top-middle').html(computer);
        $('#top-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-middle').html() == computer && $('#top-right').html() == computer && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;
      }else if($('#middle-left').html() == computer && $('#middle-middle').html() == computer && !$('#middle-right').hasClass('clicked')){
        $('#middle-right').html(computer);
        $('#middle-right').addClass('clicked');  
        acted = true;
      }else if($('#middle-left').html() == computer && $('#middle-right').html() == computer && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == computer && $('#middle-right').html() == computer && !$('#middle-left').hasClass('clicked')){  
        $('#middle-left').html(computer);
        $('#middle-left').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == computer && $('#bottom-middle').html() == computer && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == computer && $('#bottom-right').html() == computer && !$('#bottom-middle').hasClass('clicked')){  
        $('#bottom-middle').html(computer);
        $('#bottom-middle').addClass('clicked');  
        acted = true;
      }else if($('#bottom-middle').html() == computer && $('#bottom-right').html() == computer && !$('#bottom-left').hasClass('clicked')){  
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == computer && $('#middle-left').html() == computer && !$('#bottom-left').hasClass('clicked')){
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == computer && $('#bottom-left').html() == computer && !$('#middle-left').hasClass('clicked')){  
        $('#middle-left').html(computer);
        $('#middle-left').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == computer && $('#middle-left').html() == computer && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;//
      }else if($('#top-middle').html() == computer && $('#middle-middle').html() == computer && !$('#bottom-middle').hasClass('clicked')){
        $('#bottom-middle').html(computer);
        $('#bottom-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-middle').html() == computer && $('#bottom-middle').html() == computer && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == computer && $('#bottom-middle').html() == computer && !$('#top-middle').hasClass('clicked')){  
        $('#top-middle').html(computer);
        $('#top-middle').addClass('clicked');  
        acted = true;//
      }else if($('#top-right').html() == computer && $('#middle-right').html() == computer && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#top-right').html() == computer && $('#bottom-right').html() == computer && !$('#middle-right').hasClass('clicked')){  
        $('#middle-right').html(computer);
        $('#middle-right').addClass('clicked');  
        acted = true;
      }else if($('#middle-right').html() == computer && $('#bottom-right').html() == computer && !$('#top-right').hasClass('clicked')){  
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;//
      }else if($('#top-left').html() == computer && $('#middle-middle').html() == computer && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == computer && $('#bottom-right').html() == computer && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == computer && $('#bottom-right').html() == computer && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;//
      }else if($('#bottom-left').html() == computer && $('#middle-middle').html() == computer && !$('#top-right').hasClass('clicked')){
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == computer && $('#top-right').html() == computer && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-right').html() == computer && $('#middle-middle').html() == computer && !$('#bottom-left').hasClass('clicked')){  
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;//
      }else if($('#top-left').html() == player && $('#top-middle').html() == player && !$('#top-right').hasClass('clicked')){//check if you can win
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == player && $('#top-right').html() == player && !$('#top-middle').hasClass('clicked')){ 
        $('#top-middle').html(computer);
        $('#top-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-middle').html() == player && $('#top-right').html() == player && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;
      }else if($('#middle-left').html() == player && $('#middle-middle').html() == player && !$('#middle-right').hasClass('clicked')){
        $('#middle-right').html(computer);
        $('#middle-right').addClass('clicked');  
        acted = true;
      }else if($('#middle-left').html() == player && $('#middle-right').html() == player && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == player && $('#middle-right').html() == player && !$('#middle-left').hasClass('clicked')){  
        $('#middle-left').html(computer);
        $('#middle-left').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == player && $('#bottom-middle').html() == player && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == player && $('#bottom-right').html() == player && !$('#bottom-middle').hasClass('clicked')){  
        $('#bottom-middle').html(computer);
        $('#bottom-middle').addClass('clicked');  
        acted = true;
      }else if($('#bottom-middle').html() == player && $('#bottom-right').html() == player && !$('#bottom-left').hasClass('clicked')){  
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == player && $('#middle-left').html() == player && !$('#bottom-left').hasClass('clicked')){
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == player && $('#bottom-left').html() == player && !$('#middle-left').hasClass('clicked')){  
        $('#middle-left').html(computer);
        $('#middle-left').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == player && $('#middle-left').html() == player && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;//
      }else if($('#top-middle').html() == player && $('#middle-middle').html() == player && !$('#bottom-middle').hasClass('clicked')){
        $('#bottom-middle').html(computer);
        $('#bottom-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-middle').html() == player && $('#bottom-middle').html() == player && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == player && $('#bottom-middle').html() == player && !$('#top-middle').hasClass('clicked')){  
        $('#top-middle').html(computer);
        $('#top-middle').addClass('clicked');  
        acted = true;//
      }else if($('#top-right').html() == player && $('#middle-right').html() == player && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#top-right').html() == player && $('#bottom-right').html() == player && !$('#middle-right').hasClass('clicked')){  
        $('#middle-right').html(computer);
        $('#middle-right').addClass('clicked');  
        acted = true;
      }else if($('#middle-right').html() == player && $('#bottom-right').html() == player && !$('#top-right').hasClass('clicked')){  
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;//
      }else if($('#top-left').html() == player && $('#middle-middle').html() == player && !$('#bottom-right').hasClass('clicked')){
        $('#bottom-right').html(computer);
        $('#bottom-right').addClass('clicked');  
        acted = true;
      }else if($('#top-left').html() == player && $('#bottom-right').html() == player && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#middle-middle').html() == player && $('#bottom-right').html() == player && !$('#top-left').hasClass('clicked')){  
        $('#top-left').html(computer);
        $('#top-left').addClass('clicked');  
        acted = true;//
      }else if($('#bottom-left').html() == player && $('#middle-middle').html() == player && !$('#top-right').hasClass('clicked')){
        $('#top-right').html(computer);
        $('#top-right').addClass('clicked');  
        acted = true;
      }else if($('#bottom-left').html() == player && $('#top-right').html() == player && !$('#middle-middle').hasClass('clicked')){  
        $('#middle-middle').html(computer);
        $('#middle-middle').addClass('clicked');  
        acted = true;
      }else if($('#top-right').html() == player && $('#middle-middle').html() == player && !$('#bottom-left').hasClass('clicked')){  
        $('#bottom-left').html(computer);
        $('#bottom-left').addClass('clicked');  
        acted = true;
      }else if(!$(randomGrid).text()){
        $(randomGrid).html(computer);
        $(randomGrid).addClass('clicked');  
        acted = true;   
      };      
    }
  }
});
