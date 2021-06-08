import React, { Component }  from 'react'
import { Text, View, Linking } from 'react-native';
import axios from 'axios'
import styles from '../Styles';

export default class Track extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trackInfo: ''
        }
        this.fetchTrack(this.props.track.id)
    }

    toMinutes = (millis) => {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    
    fetchTrack = async (id) => { // pega informações especificas da track //
        const trackResponse = await axios(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.props.token}
        })
      const data = trackResponse.data
      const track = {
        name: data.name,
        duration: this.toMinutes(data.duration_ms),
        popularity: data.popularity,
        uri: data.uri
      }
      this.setState( {trackInfo: track} )
    }

    render () {
        return (
            <View style={styles.track}>
                <View style={styles.makeColumn}>
                    <Text style={styles.infoText}>Música:{' '} 
                        <Text style={styles.infoText, {'color': '#00ff00'}} 
                        onPress={() => Linking.openURL(this.state.trackInfo.uri)}>
                            {this.state.trackInfo.name}
                        </Text>
                    </Text>
                    <Text style={styles.infoText}>Duração: {this.state.trackInfo.duration}</Text>
                    <Text style={styles.infoText}>Popularidade: {this.state.trackInfo.popularity}</Text>
                </View>
            </View>
        );
    };
}    

