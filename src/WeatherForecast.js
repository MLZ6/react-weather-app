import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">icon</div>
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">19°</span>
            <span className="Forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
