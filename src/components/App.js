import React, { Component } from "react";
import Header from "./Header/Header";


const items = [
	{
		id: 1,
		title: 'Home'
	},
	{
		id: 2,
		title: 'Cars'
	},
	{
		id: 3,
		title: 'Blog'
	},
	{
		id: 4,
		title: 'About'
	},
	{
		id: 5,
		title: 'Contacts'
	}
	
];

class App extends Component {
  render() {
    return <Header title="My App" data={items} />;
  }
}

export default App;
