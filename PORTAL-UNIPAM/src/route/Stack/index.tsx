import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthPage from "../../screens/AuthPage";
import DrawerRoutes from "../Drawer";
import { propsNavigationStack } from "../Models";
import Frequency from "../../screens/Frequency";
import Notes from "../../screens/Notes";
import Home from "../../screens/Home";
import Finance from "../../screens/Finance";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="AuthPage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="Frequency" component={Frequency} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Drawer" component={DrawerRoutes} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Finance" component={Finance} />
    </Stack.Navigator>
  );
}
