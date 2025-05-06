import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Frequency from "../../screens/Frequency";
import Notes from "../../screens/Notes";
import Finance from "../../screens/Finance";
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
    </Drawer.Navigator>
  );
}
