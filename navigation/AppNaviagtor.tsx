import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Nudges from '../screens/Nudges';
import Contacts from '../screens/Contacts';
import AddNudge from '../screens/AddNudge';
import AddContact from '../screens/AddContact';



export type AppStackParamList = {
    Home: undefined;
    Nudges: undefined;
    Contacts: undefined;
    AddNudge: undefined;
    AddContact: undefined;
 }


const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => { 
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Nudges" component={Nudges} />
      <AppStack.Screen name="Contacts" component={Contacts} />
      <AppStack.Screen name="AddNudge" component={AddNudge} />
      <AppStack.Screen name="AddContact" component={AddContact} />
    </AppStack.Navigator>
  )
}

export default AppNavigator;
