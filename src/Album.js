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
        this.props.navigation.navigate('Tracks', {AlbumTracks: this.state.albumTracks, AlbumImage: this.props.album.images[1].url, Token: this.props.token})
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
                                borderRadius: 10,
                                alignSelf: 'center',
                            }}
                        />
                    </TouchableOpacity> 
                    <View style={styles.makeColumn}>
                        <Text style={styles.infoText}>Artista: {this.props.album.artists[0].name} </Text>
                        <Text style={styles.infoText}>Album: {this.props.album.name}</Text>
                        <Text style={styles.infoText}>Data de lançamento: {this.props.album.release_date}</Text>
                        <Text style={styles.infoText}>Número de músicas: {this.props.album.total_tracks}</Text>
                        <TouchableOpacity 
                            style={styles.tracksButton} 
                            onPress={(e) => this.pressed()}>
                            <Text style={styles.infoText}>Ver músicas</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}
