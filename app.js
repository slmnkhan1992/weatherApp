const apiKey ="34cb9fc637da145d41fb9fb2e2716bcf";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchtBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const card = document.querySelector('.card')
console.log(card);



async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".hunidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";

    } 
    else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
      weathericon.src = "images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
  }
}

searchtBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
