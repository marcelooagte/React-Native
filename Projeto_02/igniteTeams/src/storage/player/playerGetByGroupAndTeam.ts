import {playersGetByGroup} from './playersGetByGroup';

export async function playerGetByGroupAndTeams(group: string, team: string ) {
    try{
        const storage = await playersGetByGroup(group);

        const players = storage.filter(players => players.team === team );
        
        return players; 
    }
    catch(error){
        throw error 
    }
    
}