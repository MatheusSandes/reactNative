import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  album :{
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logoImg:{
    display: "flex",
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200
  },
  albumInput:{
  display: "flex",
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 25,
  width: 15,
  height: 25,
  textAlign: 'center',
  fontWeight: 'bold'
  },
  caixaItem:{
    display: "flex",
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    width: 70,
  },
  infoText:{
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
  },
  makeColumn:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tracksButton :{
    backgroundColor: '#1ED760',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    width: 100,
    borderRadius: 8,
    border: 'none',
    marginTop: 20,
    marginLeft: 10,
  },
  
  track :{
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
    width: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'gray',
    marginTop: 5,
    marginBottom: 5,
    
  },
  
  
  trackField :{
    display: 'flex',
    alignItems: 'center',
    color: '#1ED760',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    width: 10,
    minWidth: 480,
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: 10,
    fontWeight: 'bold',
  },
  
  expandButton :{
    marginLeft: 10,
    backgroundColor:   '#1ED760',
    borderRadius: 5,
    color: '#000',
  },
  buttonTrack:{
    color: '#000',
    borderRadius: 10,
  },
  
  tracksButton:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'black',
  },
  titulo:{
    color: '#000000',
    height: 50,
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#808080' ,
    justifyContent: 'center',
    alignItems: 'center',

  },
  texto1:{
    color: '#f8f8ff',
    justifyContent: 'flex-end',
    fontSize: 24
  },
  b:{
    marginRight: 5,
  },
  input:{
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  a:{
    color: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  }
});
export default styles;

