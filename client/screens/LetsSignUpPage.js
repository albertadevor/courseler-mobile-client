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

	handleSignUpResult(result) {
		if (result.status === 'success') {
	        this.onLogIn();
	        //TODO on signup what the heck happens!
	    } else if (result.status === 'already_registered') {
	        this.setState({error: "There's already an account with that email address!"});
	    } else {
	        this.setState({error: "Unknown error :("});
	    }
	}

	redirectToLogin() {
		this.setState({redirectToLogin: true});
	}

	/* Handles IP Validation and on sucess sends signup request*/
	handleIpValidation(ipObj) {
		console.log(ipObj)
	    let firstSeven = ipObj.ip.substring(0, 7);
	    if(firstSeven == "128.148." ||
            firstSeven == "138.16." ||
	        ipObj.ip == "0:0:0:0:0:0:0:1" ||
	        ipObj.ip == "127.0.0.1") {
	 	       	var formVal = this.refs.form.getValue();
			    sendSignupRequest();
	        } else {
	       		this.setState({error: "Please to connect to Brown Wifi so we can validate that you are part of the Brown community!"});
	        }
    };

	sendSignupRequest() {
		var formVal = this.refs.form.getValue();
	    if(formVal && formVal.email && formVal.password) {
	    	api.signUp(formVal.email, formVal.password, (results) => {
      			this.handleSignUpResult(results)
    		});
	    }
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
								onPress={() => api.getIpForValidation( (ipObj) => {
									this.handleIpValidation(ipObj);
								})}
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