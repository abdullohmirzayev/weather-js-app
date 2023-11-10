const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");


// get weather
const getWeather = async (city) => {
  const data = await getData(city);
  return data;
};

// get location
changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = changeLocation.city.value.trim();
  changeLocation.reset();
  getWeather(cityName).then((data) => updateUI(data));
});
