import React, { useState } from 'react'
import axios from 'axios'
import { StyleSheet, Image,TextInput, Text, View, Button } from 'react-native';
import styles from  './Styles.js'


function Album({album, token}) {
  const [albumTracks, setAlbumTracks] = useState([])
  const [isTracksVisible, setIsTracksVisible] = useState(false)

  const fetchTracks = async (id) => {
    const tracksResponse = await axios(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })

    const tracks = tracksResponse.data.items.map(track => ({name: track.name, duration: track.duration_ms, explicit: track.explicit, id: track.id})) // mapeia as tracks pegando nome, duração em ms e se é explicito //
    setAlbumTracks(tracks)
  }

  const handleShowTracks = (id) => {
    if (!isTracksVisible) fetchTracks(id) // se tracks nao for visivel, realiza fetchtracks //
    setIsTracksVisible(!isTracksVisible) // faz a inversão se istrackvisible for true vira false e se for false vira true //
  }

  return (
    <View className={album}>
      <View className = "caixaItem"> 
        <Image src = {album.images[1].url}></Image>
        <View className = "makeColumn">
          <Text className = "infoText">Artista: {album.artists[0].name} </Text>
          <Text className = "infoText"> Nome do album: {album.name}</Text>
          <Text className = "infoText">Data de lançamento: {album.release_date}</Text>
          <Text className = "infoText">Número de músicas: {album.total_tracks}</Text>
          <Text className = "infoText">Link do album no spotify:<a href={album.external_urls.spotify}> {album.external_urls.spotify}</a></Text> 
          <Button className="tracksButton" onClick={(e) => handleShowTracks(album.id)}>Ver músicas</Button>
        </View>
      </View> 
      
    </View>
        )
}

export default Album