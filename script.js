const form = document.querySelector("form");

const getWeather = (city) =>{
    city = city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
      &appid=1f7095aae9f5c4a5cba65fa85a300a80`,
    {mode: 'cors'})
      .then(function(response) {
        return response.json()
      })
      .then(function(response){
        console.log (response);
        weather = response.name;
        showWeather(response.weather[0].description, response.main.temp);
      })
      .catch(function(error){
        console.log("error");
        document.getElementById("forecast").textContent =
        `City not found.`
      })
  }
  

  const showWeather = (cityWeather, cityTemp) =>{
    document.getElementById("forecast").textContent =
    `Current Conditions: ${Math.round((cityTemp-273.15)*1.8)+32} F with ${cityWeather}.`
  
  }

form.addEventListener("submit", function(e){
    e.preventDefault();
    getWeather(form.elements["city"].value);
  })

