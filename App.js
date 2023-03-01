
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Diseases } from './component/diseases';
import { Heart } from './component/heart';
import { Pressure } from './component/pressure';
import { Diabetes } from './component/diabetes';
import { Hepatitis } from './component/hepatitis';
import { Kidney } from './component/kidney';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Diseases" component={Diseases} />
          <Stack.Screen name="Heart" component={Heart} />
          <Stack.Screen name="Pressure" component={Pressure} />
          <Stack.Screen name="Diabetes" component={Diabetes} />
          <Stack.Screen name="Hepatitis C" component={Hepatitis} />
          <Stack.Screen name="Kidney" component={Kidney} />
          
        </Stack.Navigator>
      </NavigationContainer>
     




   
  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:"white"
  },


});
