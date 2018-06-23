var weatherRequest = new XMLHttpRequest(true);
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=5117867&units=imperial&APPID=402e84e4fa0290053b92c87af701e92a';

    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();


weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("high-temp").innerHTML = weatherData['main'].temp_max;
    document.getElementById("low-temp").innerHTML = weatherData['main'].temp_min;
    document.getElementById("desc").innerHTML = weatherData.weather[0].description;
    document.getElementById("wind-speed").innerHTML = weatherData['wind'].speed;
    
    var icon = weatherData.weather[0].icon;
    var iconsrc = "https://openweathermap.org/img/w/"+icon+".png";
    document.getElementById("icon").setAttribute("src", iconsrc);
}