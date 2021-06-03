import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios'

import styles from '../Styles'
//import Track from './Track'


export default class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumTracks: '',
            isTracksVisible: false
        }
    }

    fetchTracks = async (id) => {
        const tracksResponse = await axios(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.props.token}
        })
        const tracks = tracksResponse.data.items.map(track => ({name: track.name, duration: track.duration_ms, explicit: track.explicit, id: track.id})) // mapeia as tracks pegando nome, duração em ms e se é explicito //
        this.setState({ albumTracks: tracks })
    }

  handleShowTracks = (id) => {
    if (!this.state.isTracksVisible) this.fetchTracks(id) // se tracks nao for visivel, realiza fetchtracks //
    this.setState({ isTracksVisible: !this.state.isTracksVisible }) // faz a inversão se istrackvisible for true vira false e se for false vira true //
  }
  render () {
    return (
        <View style={styles.album}>
            <View > 
                <Image 
                source={{uri: this.props.album.images[1].url}} 
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    alignSelf: 'center',
                }}/>
                <View style={styles.makeColumn}>
                    <Text style={styles.infoText}>Artista: {this.props.album.artists[0].name} </Text>
                    <Text style={styles.infoText}>Nome do album: {this.props.album.name}</Text>
                    <Text style={styles.infoText}>Data de lançamento: {this.props.album.release_date}</Text>
                    <Text style={styles.infoText}>Número de músicas: {this.props.album.total_tracks}</Text>
                    <View style = {{flexDirection:'row'}}>
                    <Text style={styles.infoText2}>
                        Link do album no spotify: { } 
                        <Text 
                            style={styles.a} onPress={() => Linking.openURL(this.props.album.external_urls.spotify)}>
                            {this.props.album.external_urls.spotify}
                        </Text>
                    </Text> 
                    </View>
                    <TouchableOpacity 
                        style={styles.tracksButton} 
                        onPress={(e) => this.handleShowTracks(this.props.album.id)}>
                        <Text style={styles.infoText}>Ver músicas</Text> 
                    </TouchableOpacity>
                    
                </View>
            </View> 
            {/* {this.state.albumTracks && this.state.isTracksVisible && <div className='trackList'>{albumTracks.map(track => <Track track={track} token={token}/>)}</div>} */}
        </View>
    );
  };
}
