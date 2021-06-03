import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Image,TextInput, Text, View,ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Credentials } from '../components/Credentials'
import axios from 'axios'
import styles from '../Styles.js'
var base64 = require('base-64');

import Album from './Album'

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const image = {uri: "https://www.instagram.com/p/BoXsdq4HAUm00_43QhKvEDzdSEMDz2S-o0I29E0/"}
    const { navigation } = this.props;
    let albumsList = navigation.getParam('AlbumsList')
    if (albumsList && albumsList != "") {
        return (
            <ImageBackground source={require('.././matheus_sem_camisa.jpg')} style={styles.background}>
                <ScrollView>
                       <View>
                                {albumsList.map(album => ( 
                                    <Album album={album} token={navigation.getParam('Token')} key={album.id}/> 
                                ))}
                        </View>
               </ScrollView>
            </ImageBackground>

            
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}>Nenhum resultado encontrado.</Text>
            </View>
        )
    }
  };
}

