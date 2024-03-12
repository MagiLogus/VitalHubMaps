import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { ConsultationLocal } from './src/screens/ConsultationLocal/ConsultationLocal';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='ConsultationLocal' component={ConsultationLocal} options={{ title: 'Medico - Local da Consulta', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


