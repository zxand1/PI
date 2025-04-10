import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthPage from "../../screens/AuthPage";
import DrawerRoutes from "../Drawer";
import { propsNavigationStack } from "../Models";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="AuthPage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="Drawer" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
