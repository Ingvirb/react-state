import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Using createRoot for React 18
root.render(<App />);
