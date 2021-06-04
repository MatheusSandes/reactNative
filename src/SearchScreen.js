import React, {Component} from 'react';
import { TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Credentials } from '../components/Credentials'
import axios from 'axios'
import styles from '../Styles.js'
var base64 = require('base-64');

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spotify: Credentials(),
      token: '',
      inputAlbum: '',
      AlbumsList: ''
    }

  }

  fetchToken = async() => {
    const tokenResponse = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + base64.encode(this.state.spotify.ClientId + ':' + this.state.spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    this.setState({ token: tokenResponse.data.access_token})
  }    

  fetchAlbums = async() => {
    await this.fetchToken()
    const albumsResponse = await axios(`https://api.spotify.com/v1/search?q=${this.state.inputAlbum}&type=album&limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + this.state.token}
    })
    this.setState({ AlbumsList:albumsResponse.data.albums.items })
  }

  pressed = async() => {
    if (this.state.inputAlbum) {
        await this.fetchAlbums()
    }
    this.props.navigation.navigate('Results', {AlbumsList: this.state.AlbumsList, Token: this.state.token})
  } 
  
  render() {
    return (
        <ImageBackground source={require('../components/spotify-theme-music-bkg-dark.png')} style={styles.backgroundSearch}>
          <Text style={styles.titulo}>Almostify</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={inputAlbum => this.setState( {inputAlbum} )} 
            placeholder="Digite o nome do album ou artista"
          /> 
          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.pressed()}}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </ImageBackground>
      
    );
  };
}

