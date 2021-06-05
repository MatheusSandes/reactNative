import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  album:{
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  logoImg:{
    display: "flex",
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: '#cd853f',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
 
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
    //backgroundColor: 'black',
    width: 70,
  },
  infoText:{
    display: 'flex',
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center'
    
    //marginTop: 20,
    //marginLeft: 10,
  },
  infoText2:{
    display: 'flex',
    color: '#00FF00',
    //marginTop: 20,
    alignItems: 'flex-start',

  },
  makeColumn:{
    display: 'flex',
    flexDirection: 'column',
    margin: '6%',
  },
  tracksButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    display:'flex',
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
    width: 200,
    borderRadius: 8,
    marginTop: 10,
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
    marginTop: 10,
    marginBottom: 5,
    
  },
  
  
  trackField:{
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
  body:{
    backgroundColor: 'black',
  },
  titulo:{
    color: '#00FF00',
    height: 50,
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize: 30
  },
  background:{
    flex: 1,
    resizeMode: "cover",
  },
  backgroundSearch:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
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
    display: 'flex',
    color: '#39FF14',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  }
});
export default styles;

