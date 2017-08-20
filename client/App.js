import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {


 constructor() {
    super()
    this.state = { 
      loggedIn: false
    }
    //TODO: this is being currently mocked out 
  }

  render() {
    console.log("hi my state is" + this.state.loggedIn)
    if (!this.state.loggedIn) {
      console.log("logged in!")
      return (
        <View style={styles.container}>
          <Text>"We're not logged in yet haha!"</Text>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: 'img/'}}/>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      );
      // return <LoggedInView onLogOut={() => {this.setState({loggedIn: false})}} route={this.state.route} />;
    } else {
       //return <LoggedOutView onLogIn={() => this.setState({loggedIn: true})} route={this.state.route} />;
       return(<Text>"logged in view"</Text>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
