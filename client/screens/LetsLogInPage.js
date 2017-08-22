import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SharedStyles.js';
import LoadingView from 'react-native-loading-view';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
import api from '../api/API.js'
var dismissKeyboard = require('dismissKeyboard');

const Form = t.form.Form
const Login = t.struct({
  email: t.String,
  password: t.String,
})

var scrollView = null;
var loginForm = null;

export default class LetsLogInPage extends React.Component {

	constructor() {
		super();
		this.state = {
			assetsAreLoading: true,
			loginScroll: null,
			email: "",
			password: "",
			error: "",
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

	handleLoginResult(result) {
		console.log(result)
		if (result.status === 'success') {
	        this.props.onLogIn();
	    } else if (result.status === 'unregistered') {
	        this.setState({error: "There's no account with that email address!"});
	    } else if (result.status === 'already_registered') {
	        this.setState({error: "There's already an account with that email address!"});
	    } else if (result.status === 'wrong_password') {
	        this.setState({error: "Incorrect password."});
	    } else {
	        this.setState({error: "Unknown error :("});
	    }
	};

	redirectToSignup() {
		//TODO
	}

	sendLoginRequest() {
		var formVal = this.refs.form.getValue();
	    if(formVal && formVal.email && formVal.password) {
	    	api.logIn(formVal.email, formVal.password, (results) => {
      		this.handleLoginResult(results)
    		});
	    }
	}



	update() {

	}

	// componentDidMount() {
	// 	scrollView = this.refs.loginScroll;
	// 	loginForm = this.refs.form;
	// }

		// <KeyboardAwareScrollView
		// 		contentContainerStyle = {classStyles.vertical}
		// 		getTextInputRefs={() => { return [this._emptyRef];}}
		// 		scrollEnabled={false}>

		   // <View ref={(r) => { this._textInputRef = r; }} />

	render() {

		let error = <Text>{this.state.error}</Text>
		return(
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style = {classStyles.vertical}>
					<Text style = {styles.h1}> Log In </Text>
					{error}
					<View style = {classStyles.container}>
						<Form type={Login}
							ref='form'
				          	value={this.state.value}
				          	options={this.state.options} />
				          	<View style = {classStyles.buttonContainer}>
					        	<Button
								raised
								buttonStyle={{backgroundColor: 'rgba(89,92,188,1)', 
								borderRadius: 10, width: 150}}
								textStyle={{textAlign: 'center'}}
								onPress={() => this.sendLoginRequest()}
								title={`Log In`}/>

								<Button buttonStyle={{backgroundColor: 'white', 
								width: 300}}
								textStyle={{textAlign: 'center', color: '#111'}}
								onPress={() => this.redirectToSignup()}
								title={`Or click here to sign up Instead`}/> 
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
	    marginTop: 50,
	    padding: 20,
	    width: 300,
	    marginBottom: 130,
	    marginTop: -30,
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
	}
});