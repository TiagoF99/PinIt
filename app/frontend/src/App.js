import React, { Component } from "react";
import StartPage from "./component/StartPage.js";
import UserPage from "./component/StartPage.js";
import { Link } from 'react-router-dom';

class App extends Component {
  
	render() {
		return (
	    	<main>
	        	<StartPage />
	      	</main>
	    );
	}
}
export default App;