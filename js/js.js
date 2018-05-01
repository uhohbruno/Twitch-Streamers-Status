$(document).ready(function() {
  $(".streamer").each(function(i) {
    let user = $(this).html();
    let online;
    let icon;
    let streamInfo;
    let streamUrl;
    $.ajax({url: "https://wind-bow.glitch.me/twitch-api/streams/" + user, success: function(file) {
      streamInfo = "Streaming " + file.stream.game + "<hr>" + file.stream.channel.status;
    
      console.log(file);
      if (file.stream == null) {
      online = false;
      
      }
      else {
        online = true;
      }
      
    }
  }).then(function (user){
    

    if (online) {
  
   $('<div class="online">o</div>').prependTo($(".streamer").get(i));
    $('<div class="description"><h4>' + streamInfo +' </h4></div>').appendTo($(".streamer").get(i))
    
    }
    else {
  $('<div class="offline">o</div>').prependTo($(".streamer").get(i));
    }
    
    
    
    
  })

    
    
    
  })
  
  
  $("#online").click(function() {
    $("a div").removeClass("active");
    $("#online div").addClass("active");
    $("h3").has(" .offline").css({"display":"none"});
    $("h3").has(" .online").css({"display":"block"});
  })
  
  
  $("#offline").click(function() {
    $("a div").removeClass("active");
    $("#offline div").addClass("active");
    $("h3").has(" .offline").css({"display":"block"});
    $("h3").has(" .online").css({"display":"none"});
  })
  
  
  $("#all").click(function() {
    $("a div").removeClass("active");
    $("#all div").addClass("active");
    $("h3").css({"display":"block"});
  })
    
  })
