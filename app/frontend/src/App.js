import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  getUser = username => {
    axios
      .get("http://localhost:8000/api/todos/$" + username + "/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  addUser = item => {
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => this.refreshList())
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <main className="content">
        <div id="logintitle"> Pinit! </div>
        <form id="loginform" className="bg-light">
          <div id="logintitle"> Login </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input type="username" class="form-control"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"></input>
            </div>
          </div>
          
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
        
      </main>
    );
  }
}
export default App;