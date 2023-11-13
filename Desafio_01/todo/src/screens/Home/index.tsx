import { StatusBar,  } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Tarefas } from '../../Tarefas';

export function Home(){
  const [tarefa, setTarefa] = useState('');
  function AddTarefa(){
    Alert.alert("Alerta", "Testando a adição de tarefa ");
  }
return (

<View style={styles.container}>
  <View style={styles.title}>
        <Image source={require('../../img/rocket.png')} style={styles.image}  />
        <Text style={styles.to}>to</Text><Text style={styles.do}>do</Text>
  </View>
  <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor={"#6b6b6b"}
    value={tarefa}
    onChangeText={setTarefa}
    />
    <TouchableOpacity style={styles.button} onPress={AddTarefa}><Icon name='plus-circle-outline' style={styles.icon}/></TouchableOpacity>
  </View>
  <View>
   <Tarefas />
  </View>
</View>
)
}