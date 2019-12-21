import React, { Component } from "react";
import Register from "./component/Register.js";
import Login from "./component/Login.js";

class App extends Component {
  
  render() {
    return (
      <main className="content">
        <div id="logintitle"> Pinit! </div>
        <div className="container">
          <div className="row">
            <Login />
            <Register />
          </div>
        </div>
      </main>
    );
  }
}
export default App;