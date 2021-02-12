import "./App.css";
import EventInput from "./UI/eventInput";
import React, { Component } from "react";

function App() {
  return (
    <React.Fragment>
      <h1 className="text-center">Trip Title</h1>
      <div className="form sm-6">
        <EventInput eventType="travel" />
      </div>
    </React.Fragment>
  );
}

export default App;
