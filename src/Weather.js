import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="weather-overview">
            <div className="row">
              <div className="col-6">
                <h1 id="city">New York</h1>
                <ul>
                  <li>
                    Last updated: <span id="date">Monday 8:00</span>
                  </li>
                  <li id="description">Clear</li>
                </ul>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-8">
                    <form id="search-form">
                      <input
                        type="search"
                        placeholder="Search for a city.."
                        autoComplete="off"
                        className="form-control"
                        id="city-input"
                      />
                    </form>
                  </div>
                  <div className="col-4">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex icon-and-temp">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sunny"
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong id="temperature">12</strong>
                  <span className="units">°F</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">15</span>%
                </li>
                <li>
                  Wind: <span id="wind">12</span>mph
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast">
            Forecast not currently available
          </div>
        </div>
        <div className="open-source">
          <small>
            This app is
            <a href="https://github.com/libbwith2bs/react-weather-app">
              open-source code
            </a>
            by Libby Tutewiler
          </small>
        </div>
      </div>
    </div>
  );
}
