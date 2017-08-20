import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './SharedStyles.js';
import { Asset, Font } from 'expo';
import LoadingView from 'react-native-loading-view';
import { Button } from 'react-native-elements';

export default class LoggedOutView extends React.Component {

	constructor() {
		super();
		this.state = {
			assetsAreLoading: true,
		}
	}

	login() {
		//todo something
	}

	componentWillMount() {
		this._loadAssetsAsync();
	}

	async _loadAssetsAsync() {
		try {
			await Promise.all([
				Asset.loadAsync([
					require('./assets/img/old_comp.png') //TODO add other images
				]),
				Font.loadAsync([
					{ 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
				]),
			]);
		} catch (e) {
			console.warn(
				'There was an error caching assets (see: App.js), perhaps due to a ' +
					'network timeout, so we skipped caching. Reload the app to try again.'
			);
			console.log(e);
		} finally {
			this.setState({assetsAreLoading: false})
		}
	}

	render() {

		return (
			<View style = {classStyles.mainContent}>
				<LoadingView loading={this.state.assetsAreLoading}>
					<View style = {styles.vertical}>
						<View style={styles.verticalSubContent}>
							<Text style ={classStyles.h2}>Brown University</Text>
							<Text style ={classStyles.h1}>Courseler</Text>
						</View>
						<View style={styles.alignRight}>
							<Image
								style={classStyles.computer_logo}
								source={require('./assets/img/old_comp.png')}/>
						</View>
						<Text style ={classStyles.h2}>Shop smarter 📚💫</Text>
						<View style={styles.horizontalSubContainer}>
							<Button
							raised
							buttonStyle={{backgroundColor: 'rgba(89,92,188,1)', borderRadius: 10}}
							textStyle={{textAlign: 'center'}}
							title={`Log In`}/>
							<Button
							raised
							buttonStyle={{backgroundColor: 'rgba(89,92,188,1)', borderRadius: 10}}
							textStyle={{textAlign: 'center'}}
							title={`Sign Up`}/>
						</View>
					</View>
				</LoadingView>
			</View>
		);
	}
}

const classStyles = StyleSheet.create({
	computer_logo: {
		width: 300,
		maxHeight: 200,
		resizeMode: 'contain',
		alignSelf: 'flex-end',
		flex: 0,
		marginRight: -10,
	},
	h1: {
		fontSize: 40,
		fontFamily: 'space-mono',
		color: '#333',
	},
	h2: {
		fontSize: 20,
		fontFamily: 'space-mono',
		color: '#333',
	},
	mainContent: {
		flex: 1,
	}
});