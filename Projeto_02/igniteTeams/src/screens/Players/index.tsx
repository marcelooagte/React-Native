import { Container, Form, HeaderList, NumberOfPlays } from "./styles";
import { Alert, FlatList, TextInput, Keyboard } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState, useEffect, useRef } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "src/utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";

import { playerGetByGroupAndTeams } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RouteParams = { 
    group: string
}

export function Players(){
    const [team, setTeam] = useState('Time A');
    const [newPlayerName, setNewPlayerName] = useState('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0 ){
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
        }
        const newPlayer ={
            name:newPlayerName,
            team,
        }

        try{
             await playerAddByGroup(newPlayer, group);
             newPlayerNameInputRef.current?.blur();
             Keyboard.dismiss();

             setNewPlayerName('');
             fetchPlayersByTeam();
           }
        catch(error)
        {
          if(error instanceof AppError) {
            Alert.alert('Nova pessoa', error.message );
          }
          else{
            console.log(error);
            Alert.alert('Nova pessoa', 'Não foi possível adicionar');
          }
        }

    }

    async function fetchPlayersByTeam(){
        try{
            const playersByTeam = await playerGetByGroupAndTeams(group, team);
            setPlayers(playersByTeam);
        }catch(error){
            console.log(error);
            Alert.alert('Pessoas','Não foi possível carregar as pessoas do time selecionado')
        }

    }
    useEffect(()=>{
        fetchPlayersByTeam();
    },[team])
    return(
        <Container>
           <Header showBackButton/> 
           <Highlight
                  title={group}
                  subtitle="Adicione a galera e separe os times"
           />
            
           <Form>
                <Input 
                    inputRef={newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                /> 
                <ButtonIcon 
                    onPress={handleAddPlayer}
                    icon="add"           
                /> 
           </Form>
           <HeaderList>
                    <FlatList
                        data={['Time A', 'Time B']}
                        keyExtractor={item =>item}
                        renderItem={({item})=> (
                            <Filter
                            title={item}
                            isActive={item === team}
                            onPress={()=>setTeam(item)}
                            />
                        )}
                        horizontal
                    />
                    <NumberOfPlays>
                        {players.length}
                    </NumberOfPlays>
           </HeaderList>
           <FlatList
                data={players}
                keyExtractor={item => item.name }
                renderItem={({item})=> (
                    <PlayerCard 
                     name={item.name}
                     onRemove={()=>{}}
                    />
                )}
                
                ListEmptyComponent={()=><ListEmpty message="Não há pessoas nesse time"/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex:1} 
                ]}

            />
            <Button
                title="Remover Turma"
                type={"SECONDARY"}
            />
            

           </Container>
    );
}