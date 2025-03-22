import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthPage from "../../screens/AuthPage";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
  return(
    <Navigator initialRouteName="AuthPage" screenOptions={{headerShown: false}}>
      <Screen name="AuthPage" component={AuthPage}/>
    </Navigator>
  )
}