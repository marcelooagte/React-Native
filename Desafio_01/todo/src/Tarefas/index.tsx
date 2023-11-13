import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { CheckBox } from 'react-native-elements';

export function Tarefas(){
  const [isChecked, setIsChecked] = useState(false);

  return(
  <View style={styles.container}>
    <CheckBox
        checked={isChecked}  
        containerStyle={styles.checkBox} 
            
    />
    
    <Text style={styles.text}>Interger urna interdum massa libero auctorneque turpis turpis semper.</Text>
    <Icon style={styles.icon}name="delete-forever-outline" />
    <View>
    
    </View>

  </View>
    );
} 