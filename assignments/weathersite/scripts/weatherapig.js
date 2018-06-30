var weatherRequest = new XMLHttpRequest(true);
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4428475&units=imperial&APPID=402e84e4fa0290053b92c87af701e92a';

    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();


weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData['main'].temp
}