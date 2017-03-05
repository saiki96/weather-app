$(document).ready(function(){

var url="https://api.twitch.tv/kraken/streams/freecodecamp?client_id=thhmvwllqppoz0womacr8p0lnathfv ";
$.getJSON(url,function(data){

  if(data.stream==null)
  {
    $("#fccstatus").html("Freecodecamp is currently inactive");
  }

  else
  {
      $("#fccstatus").html("freecodecamp is currently active");
  
  }
});

$.ajax({
type:"GET",
url:"https://api.twitch.tv/kraken/users/freecodecamp/follows/channels?client_id=thhmvwllqppoz0womacr8p0lnathfv",
headers:{
  client_id:"thhmvwllqppoz0womacr8p0lnathfv"
},
success:function(data1)
{

for(var i=0;i<data1.follows.length;i++)
{  var displayname=data1.follows[i].channel.display_name;
   var logo=data1.follows[i].channel.logo;
   var status=data1.follows[i].channel.status;
   var link=data1.follows[i].channel.name;     

   if(logo===null)
   {
     logo="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/06/1433261642Fotolia_69735493_Subscription_Monthly_M-300x300.jpg";
   }
$("#followerinfo").prepend("<a href='https://www.twitch.tv/"+ link +"' target='_blank'><div class='row channelbox'>" +"<div class='col-md-4'>"+ 
"<img id='img_logo' src='"+logo+"'>" + "</div>" +  "<div class='col-md-4'>" + displayname + "</div>" +
"<div class='col-md-4'>" + status + "</div></div>"+"</a>"+"<br> <br>")
}



},
})


})