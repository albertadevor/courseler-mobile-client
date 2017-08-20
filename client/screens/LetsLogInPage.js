import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SharedStyles.js';
import LoadingView from 'react-native-loading-view';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
var dismissKeyboard = require('dismissKeyboard');

const Form = t.form.Form
const Login = t.struct({
  email: t.String,
  password: t.String,
})

export default class LetsLogInPage extends React.Component {

	constructor() {
		super();
		this.state = {
			assetsAreLoading: true,
			value: {},
			options: {
		        fields: {
		          email: {
		            factory: FloatingLabel,
		          },
		          password: {
		            factory: FloatingLabel,
		          },
		        },
		    }
		}
	}

	render() {
		return(
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style = {classStyles.vertical}>

					<Text style = {styles.h1}> Log In </Text>
					<View style = {classStyles.container}>
						<Form ref='form'
				          	type={Login}
				          	value={this.state.value}
				          	options={this.state.options} />
				          	</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

}


const classStyles = StyleSheet.create({
	h1: {
		fontSize: 40,
		fontFamily: 'space-mono',
		color: '#333',
	},
	container: {
	    justifyContent: 'center',
	    marginTop: 50,
	    padding: 20,
	    width: 300,
	},
	vertical: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

});