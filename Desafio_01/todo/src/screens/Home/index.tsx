import { StatusBar,  } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Alert, TextComponent } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Tarefas } from '../../Tarefas';
import { FlatList } from 'react-native';


export function Home(){
  const [tarefa, setTarefa] = useState('');
  const [textoCompleto, setTextoCompleto]   = useState<string[]>([])
  const [tarefasCriadas, setTarefasCriadas] = useState<number>(0)
  const [tarefasConcluidas, setTarefasConcluidas] = useState<number>(0);
  const [ajuda, setAjuda] = useState<number>(0);  
  
  function AddTarefa(){
   if(tarefa){
    if(textoCompleto.includes(tarefa)){
      Alert.alert("Erro","A tarefa já se encontra cadastrada");
    }
    else{      
      setTextoCompleto(prevState =>[...prevState, tarefa])
      Alert.alert("Sucesso","A tarefa foi cadastrada com sucesso");  
      setTarefasCriadas(tarefasCriadas+1);   
    }    
  }
  else{
    Alert.alert("Erro","Não foi digitada nenhuma tarefa");
  }
  }
  
  function removeTarefa(tarefa: string){
    Alert.alert("Remove", `Você deseja remover a tarefa:${tarefa}`,[
    {
      text:'Sim',
      onPress:()=> {setTextoCompleto(prevState => prevState.filter(tarefas => tarefas !== tarefa));
      setTarefasCriadas(tarefasCriadas - 1);
      if(tarefasConcluidas > 0) {setTarefasConcluidas(tarefasConcluidas - 1)}},
       

    },
    {
      text:'Não',
      style:'cancel',
    }],)
  }

  const updateContador = (count: number) => {
    setTarefasConcluidas((prevCount) =>  prevCount + count  );
  };
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
    
  <View style={styles.result}>
      <Text style={styles.criadas}>
       Criadas :{tarefasCriadas}
      </Text>       
      <Text style={styles.concluidas}>
      </Text>
    </View>

<FlatList
    data={textoCompleto}
    keyExtractor={item => item}
    renderItem={({item })=>(
      <Tarefas 
        tarefa={item} 
        key={item}         
        onRemove={()=>{removeTarefa(item)}}
        updateContador={updateContador}
      />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=>(
      <View style={styles.containerIcons}>
        <Icon name='clipboard-text-outline' style={styles.icon2}/>
        <Text style={styles.alert}>
            Você ainda não tem tarefas cadastradas 
        </Text>
        <Text style={styles.alert2}>
          Crie tarefas e organize seus itens a fazer 
        </Text>
        
      </View>
    )}
    />       
  </View> 
    
</View>
)
}