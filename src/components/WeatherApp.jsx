import React from "react";
import useApiWeather from "../hooks/useApiWeather";
import { useState, useEffect } from "react";
import "../App.css";

const WeatherApp = () => {
  const [apiRes, convertToCentigrates, convertToFahrenheit] = useApiWeather();

  const [isCentigrates, setIsCentigrates, ] = useState(true);

  const ChangeCtoF = () => {
    setIsCentigrates(!isCentigrates);
  };

  return (

    <div className="containerWeatherApp">
      <div className="ubicationDetails">
        <div>
          <h1 className="nameCity">
            {apiRes.name}
            <i
              class="fa-solid fa-location-dot"
              style={{ fontSize: "40px", color: "gray" }}
            ></i>
          </h1>

          <h4 className="nameCountry">
            {apiRes.sys?.country}
            <i className="fa-solid fa-globe" style={{ fontSize: "22px" }}></i>
          </h4>
          <p>
            <span>
              <i class="fa-solid fa-x" style={{ fontSize: "16px" }}></i>Lon:{" "}
            </span>{" "}
            {apiRes.coord?.lon}
            <br />
            <span>
              <i class="fa-solid fa-y" style={{ fontSize: "16px" }}></i>Lat:{" "}
            </span>{" "}
            {apiRes.coord?.lat}
          </p>
        </div>
        <div className="iconAndDescription">
          <img
            className="iconWeather"
            src={`http://openweathermap.org/img/wn/${apiRes.weather?.[0].icon}@2x.png`}
          />
          <p>{apiRes.weather?.[0].description}</p>
        </div>
      </div>

      <div className="ubicationInfo">
        <div className="information">
          <div>
            <i
              className="fa-solid fa-temperature-half"
              style={{ color: "lightgreen" }}
            ></i>
            <p>
              <span>Sensación termica: </span> <br />
              {isCentigrates
                ? `${convertToCentigrates(apiRes.main?.feels_like)} °C`
                : `${convertToFahrenheit(apiRes.main?.feels_like)} °F`}
            </p>
          </div>
          <div>
            {" "}
            <i
              className="fa-solid fa-temperature-empty"
              style={{ color: "lightskyblue" }}
            ></i>
            <p>
              <span>Temp min: </span>
              <br />
              {isCentigrates
                ? `${convertToCentigrates(apiRes.main?.temp_min)} °C`
                : `${convertToFahrenheit(apiRes.main?.temp_min)} °F`}
            </p>
          </div>

          <div>
            <i
              className="fa-solid fa-temperature-full"
              style={{ color: "lightcoral" }}
            ></i>
            <p>
              <span>Temp max: </span>
              <br />
              {isCentigrates
                ? `${convertToCentigrates(apiRes.main?.temp_max)} °C`
                : `${convertToFahrenheit(apiRes.main?.temp_max)} °F`}
            </p>
          </div>
          <div>
            <i className="fa-solid fa-wind"></i>
            <p>
              <span>Velocidad del viento: </span>
              <br />
              {apiRes.wind?.speed} km/h
            </p>
          </div>
          <div>
            <i
              className="fa-solid fa-droplet"
              style={{ color: "lightblue" }}
            ></i>
            <p>
              <span>Humedad: </span>
              {apiRes.main?.humidity}%
            </p>
          </div>
          <div>
            <i
              className="fa-solid fa-water"
              style={{ color: "lightskyblue" }}
            ></i>
            <p>
              <span>Nivel del mar: </span>
              <br />
              {apiRes.main?.sea_level} m.s.n.m
            </p>
          </div>
          <div>
            <i
              className="fa-solid fa-angles-down"
              style={{ color: "orange" }}
            ></i>
            <p>
              <span>Presión: </span>
              <br />
              {apiRes.main?.pressure} mbar
            </p>
          </div>
        </div>
        <button className="buttonCtoF" onClick={ChangeCtoF}>
          {isCentigrates ? "Change to °F" : "Change to °C"}
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;
