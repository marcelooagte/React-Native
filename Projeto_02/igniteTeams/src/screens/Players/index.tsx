import { Container, Form, HeaderList, NumbersOfPlays } from "./styles";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";


export function Players(){
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Rodrigo', 'Marcelo', 'Renata','Laura']);
    return(
        <Container>
           <Header showBackButton/> 
           <Highlight
                  title="Nome da turma"
                  subtitle="Adicione a galera e separe os times"
           />
            
           <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                /> 
                <ButtonIcon 
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
                    <NumbersOfPlays>
                        {players.length}
                    </NumbersOfPlays>
           </HeaderList>
           <FlatList
                data={players}
                keyExtractor={item => item }
                renderItem={({item})=> (
                    <PlayerCard 
                     name={item}
                     onRemove={()=>{}}
                    />
                )}
                
                ListEmptyComponent={()=><ListEmpty message="Não há pessoas nesse time"/>}

            />

           </Container>
    );
}