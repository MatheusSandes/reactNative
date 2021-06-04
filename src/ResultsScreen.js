import React, {Component} from 'react';
import { Text, View,ScrollView, ImageBackground } from 'react-native';
import styles from '../Styles.js'


import Album from './Album'

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    let albumsList = navigation.getParam('AlbumsList')
    if (albumsList && albumsList != "") {
        return (
            <ImageBackground source={require('../components/spotify-theme-music-bkg-dark.png')} style={styles.background}>
                <ScrollView>
                       <View>
                            {albumsList.map(album => ( 
                                <Album album={album} token={navigation.getParam('Token')} key={album.id} navigation={this.props.navigation}/> 
                            ))}
                        </View>
               </ScrollView>
            </ImageBackground>
        );
    }
    else {
        return (
            <ImageBackground source={require('../components/spotify-theme-music-bkg-dark.png')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.infoText}>Nenhum resultado encontrado.</Text>
                </View>
            </ImageBackground>
        );
    }
  };
}

