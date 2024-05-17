import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Text } from 'react-native';


import {ThemeProvider} from 'styled-components/native';
import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  const [ fontsLoaded ]  = useFonts({Roboto_400Regular, Roboto_700Bold});
        
  return (
   <ThemeProvider theme={theme}>
    <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />
     
     <Routes />
   </ThemeProvider>
  );
}

//{fontsLoaded ? <Routes /> : <Loading/>}