import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";
export function Home(){
 const [participants, setParticipants] = useState<string[]>([])
 const [participantName, setParticipantsName] = useState('')
    function handleParticipantAdd(){
    if(participants.includes(participantName))
    {
      return Alert.alert("Participante existe","Já existe um participante na lista com esse nome")
    } 
    setParticipants(prevState => [...prevState, participantName]);  
    setParticipantsName('');
  }
  function handleParticipantRemove(name: string){
    Alert.alert("Remover",`Voce deseja remover o participante ${name}?`,[
      {
        text: 'Sim',
        onPress:() => setParticipants(prevState => prevState.filter(participants => participants !== name) ), 
      },
    {
      text:'Nao',
      style:"cancel",
    }
    ])
  }
  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>Sexta, 03 de novembro de 2023</Text>
    <View style={styles.form}>
          <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          value={participantName}
          onChangeText={setParticipantsName}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
    </View>
    <FlatList
    data={participants}
    keyExtractor={item => item}
    renderItem={({item })=>(
      <Participant 
      name={item} 
      key={item} 
      onRemove={()=>handleParticipantRemove(item)}/>
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=>(
      <Text style={styles.listEmptyText}>
        Ninguém chegou ao evento ainda  
      </Text>
    )}
    />   
   
    </View>
  )
}