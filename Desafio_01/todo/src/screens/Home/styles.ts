import { AlignCenter, Bold } from 'lucide-react';
import { StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',    
    
   },
   

  title:{
    marginTop:36,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    


  },
  image:{
    width: 50,
    height: 50,
    marginRight:15,
  },

  containerIcons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight:25,
    marginTop:30,
  },
  to:{
    color: '#4EA8DE',    
    fontSize:40,
    fontWeight:"bold",
  },
  do:{
    color: '#8284FA',
    fontSize:40,
    fontWeight:"bold",    
  },
  input:{
    
    flex:1,
    marginRight:12,
    backgroundColor: "#1F1E25",
    height:56,
    borderRadius:5,
    color:"#FFF",
    padding:16,
    fontSize:16,   
    borderWidth: 1,  
      borderColor: '#1C1C1C',
  },
  button:{
    width:56,
    height:56,
    borderRadius: 5,
    backgroundColor: '#4EA8DE',
    alignItems:'center',
    justifyContent:'center' 
  },
  icon:{
    color: '#FFF',
    fontSize: 20,    
  },
  icon2:{
    color: "#6b6b6b",
      fontSize: 60, 
      marginLeft:10
  },
  form:{
    marginTop:36,
    width:'100%',
    flexDirection:'row',
    marginBottom:42,
    
  },
  alert:{
      color: "#6b6b6b",
      fontSize: 20, 
      marginLeft:10,
      textAlign: 'center',      
  },
  alert2:{
    color: "#808080",
    marginTop:10,
  },
  result:{
    flexDirection:'row',
    justifyContent: 'space-between',
    
    alignItems:'center',
    textAlign: 'center',
    
    
  },
  margin:{
    marginTop:20
  },
  
  criadas:{
      color: '#4EA8DE',
      fontSize: 15,       
  },
  concluidas:{
      color: '#8284FA',
      fontSize: 15, 
  },
  criadasEConcluidas: {
    backgroundColor: "#1F1E25",
    borderRadius: 30,
    color: "#FFF",
    padding: 1,  
    fontSize: 14,
    textAlign:'center',
  },
  tamanhoCirculo:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
     flex: 1,
     height:17,
     width:50,
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: '#6b6b6b',
      width: '100%', 
      marginTop: 10,
      marginBottom: 10,
    },

});
