import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Frequency from "../../screens/Frequency";
import Notes from "../../screens/Notes";
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Frequency" component={Frequency} />
            <Drawer.Screen name="Notes" component={Notes} />
        </Drawer.Navigator>
    );
}
