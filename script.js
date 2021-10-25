let weatherDiv = document.getElementById("container");

const api_url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Decatur,us&units=imperial&appid=e458f3719040b92db51cd836f40d7269";

async function getWeather() {
  const response = await fetch(api_url);
  const data = await response.json();
  let atlanta = data.city.name;
  console.log(data);
  let day1 = data.list[0].dt_txt;
  let temp = data.list[0].main.temp;
  let feelTemp = data.list[0].main.feels_like;
  let visibility = data.list[0].visibility;
  weatherDiv.innerHTML = `
  <div class="box">
  <h1>City: ${atlanta}</h1>
  <h3>Day: ${day1}<h3>
  <h3>Temp: ${temp}<h3>
  <h3>Feels Like: ${feelTemp}<h3>
  <h3>Visibilty:${visibility}<h3>
  </div>`;
}

getWeather();
