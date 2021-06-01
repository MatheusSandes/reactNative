import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Image,TextInput, Text, View } from 'react-native';
import axios from 'axios'
import Album from './Album'
import { Credentials } from './components/Credentials'
import styles from './Styles.js'

export default function App() {
  const spotify = Credentials(); // pega meu client id e meu client secret// 
  const [token, setToken] = useState('');
  const [inputAlbum, setInputAlbum] = useState('')
  const [albumsList, setAlbumsList] = useState('')

   useEffect(() => {
    const fetchToken = async () => {
      const tokenResponse = await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      setToken(tokenResponse.data.access_token);
    }

    fetchToken()
  },  [spotify.ClientId, spotify.ClientSecret]) // a cada vez que o client id ou o client secret mudar, será executado novamente //

  useEffect(() => {
    const fetchAlbums = async () => {
      console.log(token)
      const albumsResponse = await axios(`https://api.spotify.com/v1/search?q=${inputAlbum}&type=album&limit=10`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })

      setAlbumsList(albumsResponse.data.albums.items)
    }
    fetchAlbums()
  }, [token, inputAlbum])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Almostify</Text>
        <TextInput style={styles.input} value={inputAlbum} onChange={(e) => setInputAlbum(e.target.value)} placeholder="Digite o nome do album ou artista"/>
        
        {albumsList && albumsList.map(album => ( //percorre e mapeia a lista de albums se albumList maior que zero//
          <Album album={album} token={token} key={album.id}/> // chama o componente album //
        ))}
    </View>
 
);
}
