import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Frequency from "../../screens/Frequency";
import Notes from "../../screens/Notes";
import AuthPage from "../../screens/AuthPage";
import Finance from "../../screens/Finance";
import ClassPlan from "../../screens/ClassPlan";
import ClassSchedules from "../../screens/ClassSchedules";
import CustomDrawerContent from "../../components/Drawer";

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
      <Drawer.Screen name="Plano de Aula" component={ClassPlan} />
      <Drawer.Screen name="Horários" component={ClassSchedules} />
    </Drawer.Navigator>
  );
}
