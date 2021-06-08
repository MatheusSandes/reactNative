import React, {Component} from 'react';
import { Text, Image, ScrollView, Linking,  ImageBackground, View } from 'react-native';
import styles from '../Styles.js'

import Track from './Track'

export default class TracksScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    let albumTracks = navigation.getParam('AlbumTracks')
    return (
        <ImageBackground source={require('../components/spotify-theme-music-bkg-dark.png')} style={styles.background}>
            <ScrollView>
                <Image 
                    source={{uri: navigation.getParam('AlbumImage')}} 
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 10,
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.titulo} onPress={() => Linking.openURL(navigation.getParam('AlbumLink'))}>{navigation.getParam('AlbumName')}</Text>
                {albumTracks.map(track => ( 
                    <Track track={track} token={navigation.getParam('Token')} key={track.id}/> 
                ))}
            </ScrollView>
        </ImageBackground>

        
    );
  };
}

