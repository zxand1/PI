import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

import Actividy from "../../screens/Actividy";
import AuthPage from "../../screens/AuthPage";
import ClassPlan from "../../screens/ClassPlan";
import ClassSchedules from "../../screens/ClassSchedules";
import Finance from "../../screens/Finance";
import Frequency from "../../screens/Frequency";
import Home from "../../screens/Home";
import Notes from "../../screens/Notes";
import DrawerRoutes from "../Drawer";

export type PropsNavigationStack = {
  AuthPage: undefined;
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
  Drawer: undefined;
  Finance: undefined;
  ClassPlan: undefined;
  ClassSchedules: undefined;
  Actividy: undefined;
  Detalhes: { atividade: any } | undefined;
};

export type PropStack = NativeStackNavigationProp<PropsNavigationStack>;
const { Navigator, Screen } = createNativeStackNavigator<PropsNavigationStack>();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName="AuthPage" screenOptions={{ headerShown: false }}>
      <Screen name="AuthPage" component={AuthPage} />
      <Screen name="Frequency" component={Frequency} />
      <Screen name="Notes" component={Notes} />
      <Screen name="Drawer" component={DrawerRoutes} />
      <Screen name="Home" component={Home} />
      <Screen name="Finance" component={Finance} />
      <Screen name="ClassPlan" component={ClassPlan} />
      <Screen name="ClassSchedules" component={ClassSchedules} />
      <Screen name="Actividy" component={Actividy} />
    </Navigator>
  );
}
