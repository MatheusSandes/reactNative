import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Linking, Card } from 'react-native';
import axios from 'axios'

import styles from '../Styles'


export default class Album extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            albumTracks: ''
        }
    }

    fetchTracks = async (id) => {
        const tracksResponse = await axios(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.props.token}
        })
        const tracks = tracksResponse.data.items.map(track => 
            ({name: track.name, 
            duration: track.duration_ms, 
            explicit: track.explicit, 
            id: track.id})
        ) 
        this.setState({ albumTracks: tracks })
    }

    pressed = async(id) => {
        await this.fetchTracks(this.props.album.id)
        this.props.navigation.navigate('Tracks', {AlbumTracks: this.state.albumTracks, AlbumName: this.props.album.name, AlbumLink: this.props.album.external_urls.spotify, AlbumImage: this.props.album.images[0].url, Token: this.props.token})
    }


    render () {
        return (
            <View style={styles.album}>
                <View style={{flexDirection:"row"}}> 
                    <TouchableOpacity onPress={() => Linking.openURL(this.props.album.external_urls.spotify)}>
                        <Image 
                            source={{uri: this.props.album.images[1].url}} 
                            style={{
                                width: 150,
                                height: 150,
                                marginTop: 30,
                                marginLeft: 5,
                                borderRadius: 10,
                                alignSelf: 'center',
                            }}
                        />
                    </TouchableOpacity> 
                    <View style={styles.makeColumn}>
                        <Text style={styles.infoText, {color: '#00ff00'}}>Artista:</Text>
                            <Text style={styles.texto1}>{this.props.album.artists[0].name}</Text>
                        <Text style={styles.infoText, {color: '#00ff00'}}>Album: </Text>
                            <Text style={styles.texto1}>{this.props.album.name}</Text>
                        <Text style={styles.infoText, {color: '#00ff00'}}>Data de lançamento: <Text style={styles.infoText}>{this.props.album.release_date}</Text></Text>
                        <Text style={styles.infoText, {color: '#00ff00'}}>Número de músicas: <Text style={styles.infoText}>{this.props.album.total_tracks}</Text></Text>
 
                        <TouchableOpacity 
                            style={styles.tracksButton} 
                            onPress={(e) => this.pressed()}>
                            <Text style={styles.infoText2}>Ver músicas</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}
