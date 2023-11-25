import React from "react";
import "./App.css";
import Create from "./components/create/Create";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="app_container">
      <Signup />
      <Create />
    </div>
  );
}

export default App;
