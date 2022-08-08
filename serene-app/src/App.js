import React from "react";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.title = "Serial Rena Nene Dashboard";
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
