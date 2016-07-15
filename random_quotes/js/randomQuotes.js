$(document).ready(function() {
  function getNewquotes(){
    var quote = ["Learn from yesterday, live for today, hope for tomorrow.  The important thing is not to stop questioning."
    ,"You can't blame gravity for falling in love.","Good, better, best.  Never let it rest.  'Til your good is better and your better is best"
    , "Logic is in the eye of the logician", "Hasta La Vista, Baby","Go Ahead, Make My Day","There's No Crying in Baseball",
    "We are all here on earth to help others; what on earth the others are here for I don't know.","Tact is the knack of making a point without making an enemy"
    ,"If I have seen furthur than others, it is by standing upon the shoulders of giants."
    ,"I can calculate the motion of heavenly bodies, but not the madness of people."
    ,"To every action there is always opposed an equal reaction."
    ,"If I have done the public any service, it is due to my patient thought."
    ,"To myself I am only a child playing on the beach, while vast oceans of truth lie undiscovered before me."
    ,"I keep the subject of my inquiry constantly before me, and wait till the first dawning opens gradually, by little and little, into a full and clear light."];
    var author = ["Albert Einstein","Albert Einstein","St.Jerome","Gloria Steinem","Terminator2","Dirty Harry","League of Their Own","W.H.Auden"
    ,"Sir Issac Newton","Sir Issac Newton","Sir Issac Newton","Sir Issac Newton","Sir Issac Newton","Sir Issac Newton","Sir Issac Newton"];

    var randomNum = Math.floor(Math.random()*quote.length);
    randomQuote = quote[randomNum];
    randomAuthor = author[randomNum];

    // $(".quote").html(randomQuote); //non-animation method
    // $(".author").html(randomAuthor);
  
    $(function() {
    $('.quote').fadeOut(1000, function() {
        $(this).text(randomQuote).fadeIn(1000);
      });
    });
    $(function() {
    $('.author, footer').fadeOut(1000, function() {
        $(this).text(randomAuthor).fadeIn(1000);
      });
    });

    var color = ['rgb(29,161,242)','#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var randomNum2 = Math.floor(Math.random()*color.length);
    var randomColor = color[randomNum2];
    // $("body").css("background",randomColor);  //non-animation method
    $("html,body,button").animate({backgroundColor:randomColor}, 1000);
    $(".quotation,.fa").animate({color:randomColor}, 1000);  

  }

  getNewquotes(); //when pages refresh, run the function

  $('.btn').on('click', function() { 
    getNewquotes();
  });

  $('#link1').on('click', function(){
    var tweetUrl = 'https://twitter.com/intent/tweet?text='    //+ encodeURIComponent(phrase)
    + '"' + randomQuote + '"' + ' -' + randomAuthor + '&hashtags=quotes';
    window.open(tweetUrl);
  });

});
//watch tutorials on youtube
// https://twitter.com/intent/tweet?
// url=<url to tweet>
// text=<text to tweet>
// hashtags=<comma separated list of hashtags, with no # on them>
// https://twitter.com/intent/tweet?url=http://www.example.com&text=I+am+eating+branston+pickel+right+now&hashtags=bransonpickel,pickles