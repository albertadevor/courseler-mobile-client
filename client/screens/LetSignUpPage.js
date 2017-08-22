import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SharedStyles.js';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
import api from '../api/API.js'
var dismissKeyboard = require('dismissKeyboard');

export default class LetsSignUpPage extends React.Component {

	constructor() {
		super();
		this.state = {
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


}