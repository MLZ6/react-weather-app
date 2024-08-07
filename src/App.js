import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Gaborone" />
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
            href="https://imaginative-kringle-521ea0.netlify.app/"
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
