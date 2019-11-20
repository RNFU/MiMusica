import React, { Component } from 'react';
import {
    StyleSheet,
    View,
 } from 'react-native';

 import { getMusicaData } from './api-client'
//import console = require('console');

import ArtistList from './ArtistList'
 export default class HomeView extends Component <Props> {
     state = { 
         artists: null
     }
     componentDidMount() {
         getMusicaData().then(data => this.setState ({artists:data}))
     }

     render(){
         const artists = this.state.artists
         console.warn(artists)

         return (
             <View style = {styles.container} >
             {artists && <ArtistList artists ={artists}/>}
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor: 'lightgray',
     }
 })