import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";
import CustomDrawerContent from "../../components/Drawer";
import Actividy from "../../screens/Actividy";
import AuthPage from "../../screens/AuthPage";
import ClassPlan from "../../screens/ClassPlan";
import ClassSchedules from "../../screens/ClassSchedules";
import Finance from "../../screens/Finance";
import Frequency from "../../screens/Frequency";
import Home from "../../screens/Home";
import Notes from "../../screens/Notes";

export type PropsNavigationDrawer = {
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
  Finance: undefined;
  AuthPage: undefined;
  ClassPlan: undefined;
  ClassSchedules: undefined;
  Actividy: undefined;
};

export type PropDrawer = DrawerNavigationProp<PropsNavigationDrawer>;

const Drawer = createDrawerNavigator<PropsNavigationDrawer>();

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
      <Drawer.Screen name="Frequency" component={Frequency} />
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Finance" component={Finance} />
      <Drawer.Screen name="AuthPage" component={AuthPage} />
      <Drawer.Screen name="ClassPlan" component={ClassPlan} />
      <Drawer.Screen name="ClassSchedules" component={ClassSchedules} />
      <Drawer.Screen name="Actividy" component={Actividy} />
    </Drawer.Navigator>
  );
}
