import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Miniatura from './src/telas/Miniatura';

export default function App(){
  const [fontCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontSerratBold" : Montserrat_700Bold
  });

  if(!fontCarregada){
    return <View/>
  }  

  return (
    <View style={styles.container}>
      <Miniatura/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
