import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import AuthPage from "../../screens/AuthPage";
import { propsNavigationStack } from "./Models";
import Frequency from "../../screens/Frequency";
import Notes from "../../screens/Notes";
import PlanClassroom from "../../screens/PlanClassroom";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
  return(
    <Navigator initialRouteName="AuthPage" screenOptions={{headerShown: false}}>
      <Screen name="AuthPage" component={AuthPage}/>
      <Screen name="Home" component={Home}/>
      <Screen name="Frequency" component={Frequency}/>
      <Screen name="Notes" component={Notes}/>
      <Screen name="PlanClassroom" component={PlanClassroom}/>
    </Navigator>
  )
}