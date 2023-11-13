import { Bold } from 'lucide-react';
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
    justifyContent:'center'

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
  form:{
    marginTop:36,
    width:'100%',
    flexDirection:'row',
    marginBottom:42,
  }

});
