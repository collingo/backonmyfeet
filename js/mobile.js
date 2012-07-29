$().ready(function(){
  //$.getJSON('http://api.jo.je/virginmoneygiving/jsonp.php?d=177727&nocache=1&callback=?', {},  function (data) {
  $.getJSON('http://api.jo.je/virginmoneygiving/jsonp.php?d=177727&callback=?', {},  function (data) {    
    $("#steps").html(data.money_total.replace(".00", ""));
    var donations = "";
    data.donations = data.donations.reverse();
    $.each(data.donations, function(index, value) {
      if(value.message != "") {
        var msg = $("<p />").html(value.message).addClass('message');
      } else {
        var msg = "";
      }
      var prsn = $("<p />").html(value.person).addClass('from');
      var mnt = $("<p />").html("donated "+value.amount.replace(".00", "")+" steps").addClass('amount');
      var tt = 'href="http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id='+index+'"';
      var ft = 'href="http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id='+index+'"';
      var share = "<span style=\"display: block; text-align:left; margin: 5px 0 0 0;\"><a "+tt+"><img src=\"/images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+"><img src=\"/images/btn-facebook-small.png\"></a></span>";
      msg.append(share);
      var dontation = $("<article />").append(msg).append(prsn).append(mnt).click(function(){
        if(!$(this).hasClass('active')) {
          var el = $(this);
          $("article.active .message").slideUp(250);
          setTimeout(function(){
            $("article.active").removeClass('active');
            el.addClass('active');
            setTimeout(function(){
              el.find('.message').slideDown(250);
              setTimeout(function(){
                $("html, body").animate({
                  scrollTop: el.offset().top-50
                }, 100);
              }, 255);
            }, 251);
          }, 251);
        }
      });
      $("#donations").append(dontation);
    });
  });
  $("nav a").click(function(){
    if($(this).hasClass('active')) {
      return false;
    }
    $("nav a.active").removeClass('active');
    $(this).addClass('active');
    
    var id = $(this).attr('href').replace('#', '');
    
    if(id === 'about') {
      var hide = $("#donations");
      var show = $("#about");
    } else {
      var hide = $("#about");
      var show = $("#donations");
    }
    
    hide.fadeOut(250);
    show.delay(251).fadeIn(250);
    
    return false;
  });

});
$(window).load(function(){
  $("#preloading").fadeOut(250);
});

var active_slide = 0;
    slides = $("#about article").length-1;
  
function next_slide() {
  if(active_slide === slides) {
    var show = $("#about article").eq(0);
    var hide = $("#about article").eq(active_slide);
    active_slide = 0;
  } else {
    var show = $("#about article").eq(active_slide+1);
    var hide = $("#about article").eq(active_slide);
    active_slide+=1;
  }
  
  hide.fadeOut(250, function(){
    show.fadeIn(250);
  });
};

function prev_slide() {
  if(active_slide === 0) {
    var show = $("#about article").eq(slides);
    var hide = $("#about article").eq(active_slide);
    active_slide = slides;
  } else {
    var show = $("#about article").eq(active_slide-1);
    var hide = $("#about article").eq(active_slide);
    active_slide-=1;
  }
  
  hide.fadeOut(250, function(){
    show.fadeIn(250);
  });
};