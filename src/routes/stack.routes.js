import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Home from "../pages/Home";
import Agenda from "../pages/Agenda";
import Body from "../components/Body";
import DoctorList from "../pages/Medicos";
import EmergencyContactList from "../pages/Contacts";
import TicTacToe from "../pages/Games";

export function StackRoutes(){
    return (
        <Navigator>
  <Screen
    name='home' 
    component={Home}
    options={{headerShown: false}}
  />
  <Screen
    name='body' 
    component={Body}
    options={{headerShown: false}}
  />
  <Screen
    name='agenda' 
    component={Agenda}
    options={{headerShown: true}}
  />
  <Screen
    name='medico' 
    component={DoctorList}
    options={{headerShown: true}}
  />
  <Screen
    name='contatos' 
    component={EmergencyContactList}
    options={{headerShown: true}}
  />
  <Screen
    name='games' 
    component={TicTacToe}
    options={{headerShown: true}}
  />
</Navigator>

    )
}