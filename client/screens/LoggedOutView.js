import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './SharedStyles.js';
import LetsLogInPage from './LetsLogInPage.js';
import { Asset, Font } from 'expo';
import LetsSignUpPage from './LetsSignUpPage.js';
import LoadingView from 'react-native-loading-view';
import { Button } from 'react-native-elements';

export default class LoggedOutView extends React.Component {

	constructor() {
		super();
		this.state = {
			assetsAreLoading: true,
			showLoginPage: false,
			showSignUpPage: false,
		}

	}

	login() {
		//Aparently you have to explicitly say setState to re-render
		this.setState({showLoginPage: true});
	}

	signup() {
		//Aparently you have to explicitly say setState to re-render
		this.setState({showSignUpPage: true});
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

		if(this.state.showLoginPage) {
			return (<LetsLogInPage />);
		}

		if(this.state.showSignUpPage) {
			return (<LetsSignUpPage />);
		}

		return (
			<View style = {classStyles.mainContent}>
				<LoadingView loading={this.state.assetsAreLoading}>
					<View style = {styles.vertical}>
						<View style={styles.verticalSubContent}>
							<Text style ={classStyles.h2}>Brown University</Text>
							<Text style ={styles.h1}>Courseler</Text>
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
							onPress={() => this.login()}
							title={`Log In`}/>
							<Button
							raised
							buttonStyle={{backgroundColor: 'rgba(89,92,188,1)', borderRadius: 10}}
							textStyle={{textAlign: 'center'}}
							onPress={() => this.signup()}
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
	h2: {
		fontSize: 20,
		fontFamily: 'space-mono',
		color: '#333',
	},
	mainContent: {
		flex: 1,
	}
});