import { StatusBar, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState, useEffect } from 'react';
import { Tarefas } from '../../Tarefas';
import { FlatList } from 'react-native';

export function Home() {
  const [tarefa, setTarefa] = useState('');
  const [textoCompleto, setTextoCompleto] = useState<string[]>([]);
  const [tarefasCriadas, setTarefasCriadas] = useState<number>(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState<number>(0);
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    const quantidadeTrue = checked.filter(value => value).length;
    setTarefasConcluidas(quantidadeTrue);
  }, [checked]);

  function AddTarefa() {
    if (tarefa) {
      if (textoCompleto.includes(tarefa)) {
        Alert.alert('Erro', 'A tarefa já se encontra cadastrada');
      } else {
        setTextoCompleto(prevState => [...prevState, tarefa]);
        setChecked(prevState => [...prevState, false]);
        Alert.alert('Sucesso', 'A tarefa foi cadastrada com sucesso');
        setTarefasCriadas(tarefasCriadas + 1);
      }
    } else {
      Alert.alert('Erro', 'Não foi digitada nenhuma tarefa');
    }
  }

  const updateContador = (index: number, isChecked: boolean) => {
    const newChecked = [...checked];
    newChecked[index] = isChecked;
    setChecked(newChecked);
  };

  function removeTarefa(tarefa: string, isChecked: boolean, index: number) {
    Alert.alert(
      'Remove',
      `Você deseja remover a tarefa:${tarefa}`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setTextoCompleto(prevState => prevState.filter(tarefas => tarefas !== tarefa));
            setTarefasCriadas(tarefasCriadas - 1);
            if (isChecked) {
              setTarefasConcluidas(tarefasConcluidas - 1);
            }
            const newChecked = [...checked];
            newChecked.splice(index, 1);
            setChecked(newChecked);
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={require('../../img/rocket.png')} style={styles.image} />
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#6b6b6b'}
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.button} onPress={AddTarefa}>
          <Icon name="plus-circle-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.result}>
          <Text style={styles.criadas}>Criadas :{tarefasCriadas}</Text>
          <Text style={styles.concluidas}>Concluídas: {tarefasConcluidas}</Text>
        </View>

        <FlatList
          data={textoCompleto}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Tarefas
              tarefa={item}
              key={item}
              onRemove={() => removeTarefa(item, checked[index], index)}
              updateContador={isChecked => updateContador(index, isChecked)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerIcons}>
              <Icon name="clipboard-text-outline" style={styles.icon2} />
              <Text style={styles.alert}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.alert2}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
