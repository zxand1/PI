import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawerContent from "../../components/Drawer";
import AuthPage from "../../screens/AuthPage";
import Finance from "../../screens/Finance";
import Frequency from "../../screens/Frequency";
import Home from "../../screens/Home";
import Notes from "../../screens/Notes";
import Materials from "../../screens/Materiais";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#014a8f",
        drawerLabelStyle: { marginLeft: -20 },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Frequência" component={Frequency} />
      <Drawer.Screen name="Notas" component={Notes} />
      <Drawer.Screen name="Financeiro" component={Finance} />
      <Drawer.Screen name="Autenticação" component={AuthPage} />
      <Drawer.Screen name="Materiais" component={Materials} />
    </Drawer.Navigator>
  );
}
