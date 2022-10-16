import React from "react";
import { Image1 } from "./assets";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-blue-ribbon-500">Development</h1>
      <img src={Image1} alt="" />
      <Routes />
    </div>
  );
}

export default App;