import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
