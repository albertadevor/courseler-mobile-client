import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SharedStyles.js';
import LoadingView from 'react-native-loading-view';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
var dismissKeyboard = require('dismissKeyboard');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
			value: {},
			options: {
		        fields: {
		          email: {
		            factory: FloatingLabel,
		            onFocus: this.formFocused,
		          },
		          password: {
		            factory: FloatingLabel,
		          },
		        },
		    }
		}
	}

	// Scroll form into view.
	formFocused() {
	  // 	setTimeout(() => {
	  // 	console.log(this.refs)
	  //   let scrollResponder = scrollView.getScrollResponder();
	  //   scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
	  //   React.findNodeHandle(loginForm),
	  //     110, //additionalOffset
	  //     true
	  //   );
	  // }, 50);
	}

	// componentDidMount() {
	// 	scrollView = this.refs.loginScroll;
	// 	loginForm = this.refs.form;
	// }

	render() {
		return(
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAwareScrollView
				contentContainerStyle = {classStyles.vertical}
				scrollEnabled={false}
				resetScrollToCoords={{ x: 0, y: 0 }}>
					<Text style = {styles.h1}> Log In </Text>
					<View style = {classStyles.container}>
						<Form ref='form'
				          	type={Login}
				          	value={this.state.value}
				          	options={this.state.options} />
				    </View>
				</KeyboardAwareScrollView>
			</TouchableWithoutFeedback>
		);
	}
}


const classStyles = StyleSheet.create({
	h1: {
		fontSize: 40,
		fontFamily: 'space-mono',
		color: '#333',
		paddingBottom: -20,
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
		justifyContent: 'center',
		alignItems: 'center',
	},

});