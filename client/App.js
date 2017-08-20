import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './SharedStyles.js';
import { AppLoading, Asset, Font } from 'expo';

export default class App extends React.Component {

 constructor() {
    super()
    this.state = { 
      loggedIn: false,
      assetsAreLoaded: false,
    }
    //TODO: this is being currently mocked out 
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
          // This is the font that we are using for our tab bar
          //Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ]),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }

  render() {
    if (!this.state.assetsAreLoaded) {
      //TODO make app loading screen and have app loading logic

      //return <AppLoading />;
      return (<Text> Still loading </Text>);
    }
    if (!this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style ={styles.h1}>Courseler</Text>
          </View>
          <View style={styles.contentContainer}>
            <Image
            style={classStyles.computer_logo}
            source={require('./assets/img/old_comp.png')}/>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </View>
      );
      // return <LoggedInView onLogOut={() => {this.setState({loggedIn: false})}} route={this.state.route} />;
    } else {
       //return <LoggedOutView onLogIn={() => this.setState({loggedIn: true})} route={this.state.route} />;
       return(<Text>"logged in view"</Text>);
    }
  }
}

const classStyles = StyleSheet.create({
  computer_logo: {
    flex: 2,
    maxHeight: 200,
    borderColor:'red',
    resizeMode: 'contain',
  },
});
