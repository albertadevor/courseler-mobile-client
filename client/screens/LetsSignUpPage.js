import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SharedStyles.js';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
import LetsLogInPage from './LetsLogInPage.js';
import api from '../api/API.js'
var dismissKeyboard = require('dismissKeyboard');

const Form = t.form.Form
const SignUp = t.struct({
  email: t.String,
  password: t.String,
})

export default class LetsSignUpPage extends React.Component {

	constructor() {
		super();
		this.state = {
			error: "",
			redirectToLogin: false,
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

	redirectToLogin() {
		this.setState({redirectToLogin: true});
	}

	sendSignupRequest() {
		//TODO
	}

	render() {
		let error = <Text style = {classStyles.errorText}>{this.state.error}</Text>
		if(this.state.redirectToLogin) {
			return <LetsLogInPage />
		}
		return(
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style = {classStyles.vertical}>
					<Text style = {styles.h1}> Sign Up 💫</Text>
					{error}
					<View style = {classStyles.container}>
						<Form type={SignUp}
							ref='form'
				          	value={this.state.value}
				          	options={this.state.options} />
				          	<View style = {classStyles.buttonContainer}>
					        	<Button
								raised
								buttonStyle={{backgroundColor: 'rgba(89,92,188,1)', 
								borderRadius: 10, width: 150}}
								textStyle={{textAlign: 'center'}}
								onPress={() => this.sendSignupRequest()}
								title={`Sign Up`}/>

								<Button buttonStyle={{backgroundColor: 'white', 
								width: 300}}
								textStyle={{textAlign: 'center', color: '#111'}}
								onPress={() => this.redirectToLogin()}
								title={`Or click here to sign in instead`}/> 
							</View>
							
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
	    alignContent: 'center',
	    marginTop: 0,
	    padding: 20,
	    width: 300,
	    marginBottom: 130,
	},
	vertical: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
	}
});