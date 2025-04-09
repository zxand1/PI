import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import AuthPage from "../../screens/AuthPage";
import { propsNavigationStack } from "./Models";
import Frequency from "../../screens/Frequency";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
  return(
    <Navigator initialRouteName="AuthPage" screenOptions={{headerShown: false}}>
      <Screen name="AuthPage" component={AuthPage}/>
      <Screen name="Home" component={Home}/>
      <Screen name= "Frequency" component={Frequency}/>
    </Navigator>
  )
}