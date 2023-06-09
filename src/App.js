//import logo from './logo.svg';
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a87acad68db83d1c5ba6d0fa6da75184&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setlocation("");
    }
  };

  /* const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15; // Conversion formula
  }; */

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°c </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} °c</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()}% </p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()}MPH </p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
