import React, { Component } from "react";
import axios from "axios";
import pg from 'pg';

export default class Feed extends Component {
  
  constructor(props) {
    super(props);
    this.curr_username = this.props.curr_username;
    this.state = {
          boardList: []
        };
  };

  // other() {
  // 	try {
  // 		var pg = require(pg);
	 //  	var connectionString = "postgres://myuser:money1999@localhost/ip:5432/mydb";
	 //  	var pgClient = new pg.Client(connectionString);
		// pgClient.connect();

		// var query = pgClient.query("SELECT max(id) from database_board");
		// query.on("row", function(row,result){
		// 	console.log(row);
		// });
  // 	} catch(err) {
  // 		console.log(err)
  // 	}

  // }

  componentDidMount() {
  	this.refreshList();
  }

  refreshList = () => {
  	axios
    .get("http://localhost:8000/api/boards/")
    .then(res => this.setState({ boardList: res.data }))
    .catch(err => console.log(err));
   };

   renderItems = () => {
   		console.log(this.state.boardList);
        const newItems = this.state.boardList.filter(
          item => item.username === this.curr_username
        );
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div> {item.title} : {item.description} : {item.date} : {item.id} : {item.username} </div>

          </li>
        ));
      };


  handleSubmit = () => {
  	// var maximum = this.other();
  	// console.log("maximum: " + maximum);
  	const title = document.getElementById("board-title").value;
  	const description = document.getElementById("board-desc").value;
  	const item = {id: 2, username: this.curr_username, title: title, description: description, date: "2019-11-24"};
  	console.log(item);
    axios
      .post("http://localhost:8000/api/boards/", item)
      .then(res => this.refreshList());
  };

  render() {

    return (

    	<div className="container-fluid">
      		<div className="row">
      			<div className="col-12">

	      			<div className="jumbotron jumbotron-fluid" id="jumbo-cont">
					  <div className="container">
					    <h1 className="display-4">Add A New Board Here!</h1>
					    <hr className="my-4" />
					    <form>
						  <div className="form-group">
						    <label htmlFor="board-title">Title</label>
						    <input type="text" className="form-control" id="board-title" placeholder="It is a beautiful day to save lives" />
						  </div>
						  <div className="form-group">
						    <label htmlFor="board-desc">Description</label>
						    <textarea className="form-control" id="board-desc" rows="3"></textarea>
						  </div>
						  <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()} >Submit</button>
						</form>
					  </div>
					</div>

      			</div>
      			<div className="col-12">
      			<hr className="my-4"/>
      			Your Boards!
      			{this.renderItems()}
      			</div>
      		</div>
      	</div>

    );
  }
}