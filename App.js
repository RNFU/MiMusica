import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'
import LoginView from './src/LoginView'; //import 1
import HomeView from './src/HomeView'; //import 2
import ArtistDetailView from './src/ArtistDetailView';
import {Actions, Scene, Router} from 'react-native-router-flux';
//import {Platform, StyleSheet, Text, View} from 'react-native';

const scenes = Actions.create(
  <Scene key = "root">
    <Scene key = "login" component = {LoginView} hideNavBar/>
    <Scene key = "home" component = {HomeView} hideNavBar/>
    <Scene key = "artistDetail" component = {ArtistDetailView} title= "Detalles" hideNavBar = {false} />
  </Scene>
)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Router scenes = {scenes} /> 
    /**
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
     */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
