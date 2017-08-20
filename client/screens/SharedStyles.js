import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	horizontalSubContainer: {
	 alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 30,
	},
	verticalSubContent: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	alignRight: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	vertical: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredText: {
		flexDirection: 'column',
		alignSelf: 'flex-end',
		width: 200,
	},
	cont: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	h1: {
		fontSize: 40,
		fontFamily: 'space-mono',
		color: '#333',
	},
});