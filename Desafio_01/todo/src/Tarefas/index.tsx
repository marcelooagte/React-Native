import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState, useEffect } from "react";
import { CheckBox } from 'react-native-elements';

type Props={
  tarefa: string,
  onRemove: ()=>void,
  updateContador: ( isChecked: boolean) => void;
}

export function Tarefas({tarefa,onRemove, updateContador}: Props){

  const [isChecked, setIsChecked] = useState(false);
  
  function mudarValor(){
    setIsChecked(!isChecked);
    updateContador(!isChecked); 
  }
  
  return(
  <View style={styles.container}>
    <CheckBox
        checked={isChecked}  
        checkedIcon='dot-circle-o' 
        uncheckedIcon='circle-o'
        uncheckedColor='#4EA8DE'
        checkedColor='#8284FA'
        onPress={mudarValor}
            
    />
    
    <Text style={styles.text}>{tarefa}</Text>
    <Icon style={styles.icon}name="delete-forever-outline" onPress={onRemove}/>
    <View>
    
    </View>

  </View>
    );
} 