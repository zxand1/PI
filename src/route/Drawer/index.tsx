import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawerContent from "../../components/Drawer";
import AuthPage from "../../screens/AuthPage";
import Finance from "../../screens/Finance";
import Frequency from "../../screens/Frequency";
import Home from "../../screens/Home";
import Notes from "../../screens/Notes";
import Materials from "../../screens/Materiais";
import Actividy from "../../screens/Actividy";
import Contacts from "../../screens/Contacts";
import Bolsas from "../../screens/Links/Bolsas";
import Unichamdos from "../../screens/Links/Unichamados";
import Eventos from "../../screens/Links/Eventos";
import Wifi from "../../screens/Links/Wifi";
const Drawer = createDrawerNavigator();




function SubDrawer() {
  const Stack = require('@react-navigation/native-stack').createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Bolsas" component={Bolsas} />
      <Stack.Screen name="UniChamados" component={Unichamdos} />
      <Stack.Screen name="Eventos" component={Eventos} />
      <Stack.Screen name="Wifi UNIPAM" component={Wifi} />
    </Stack.Navigator>
  );
}

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
      <Drawer.Screen name="Actividy" component={Actividy} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="SubDrawer" component={SubDrawer} />
    </Drawer.Navigator>




  );
}
