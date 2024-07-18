import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/MLZ6" rel="noreferrer" target="_blank">
            Maitumelo Moaletsi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MLZ6/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/bright-tulumba-9f2a26/overview"
            rel="noreferrer"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
