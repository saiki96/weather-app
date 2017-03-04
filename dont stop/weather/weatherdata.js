
$(document).ready(function(){
var lat,lon;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      
       lon=position.coords.longitude;
       lat=position.coords.latitude;
    
var url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=770a309d797b17dcd1ae88ea5984f5a2';
  
console.log(url);  

$.getJSON(url, function(data)
          {
var temp=(Math.round(data.main.temp-273))+ "&degC";   
var cond=data.weather[0].description.toUpperCase();;
var wind="wind:"+ data.wind.speed+" (kmph)";
var city=data.name.toUpperCase();
console.log(city.toUpperCase());    
$("#temp").html(temp);
$("#cond").html(cond);
$("#wind").html(wind);
$("#city").html(city);
    
});
}   
)};
});