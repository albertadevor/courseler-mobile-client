import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoggedOutView from './screens/LoggedOutView.js'

export default class App extends React.Component {

	constructor() {
		super();
		this.state = { 
			loggedIn: false,
		}
	}

	render() {
		if (!this.state.loggedIn) {
			return (<LoggedOutView/>);
		} else {
		 //return <LoggedOutView onLogIn={() => this.setState({loggedIn: true})} route={this.state.route} />;
		 return(<Text>"logged in view"</Text>);
		}
	}
}
