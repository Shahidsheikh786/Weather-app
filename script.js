
const apiKey = "ab93615d6e18f1fb43386a01341cea35";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const loadingScreen = document.querySelector('.loading-area');

const searchBox = document.querySelector('.search input');
  
  const searchBtn = document.querySelector('.search button');


async function checkWeather(city) {
  
  const weatherIcon = document.querySelector('.weather-icon');
  
 loadingScreen.style.display = "flex";

 const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
 
 
 let data = await response.json();
  
   loadingScreen.style.display = "none";


 console.log(data);

 
 document.querySelector('.city').innerHTML = data.name;
 
  document.querySelector('.wind').innerHTML = data.wind.speed + " kg/h" ;

  document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°c";

 document.querySelector('.humidity ').innerHTML = data.main.humidity + "%" ;
 

if (data.weather[0].main == "Clouds") {
  weatherIcon.src = "/clouds.png";
}else if (data.weather[0].main == "Clear") {
  weatherIcon.src = "/clear.png";
}else if (data.weather[0].main == "Rain" || "Haze") {
  weatherIcon.src = "/rain.png";
}else if (data.weather[0].main == "Drizzle") {
  weatherIcon.src = "/drizzle.png";
}else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "/mist.png";
}else {
alert('Somthing went wrong')
}
}

searchBtn.addEventListener("click", () =>{
checkWeather(searchBox.value);
})
