import React from "react";
import { View, TouchableOpacity } from "react-native";
import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import styles from "./style";
import { StackActions, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

type DrawerParamList = {
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  function handleLogout() {
    navigation.dispatch(
      StackActions.replace("AuthPage")
    )
  }
  return (
    <View style={styles.header}>
      <Logo width={40} height={40} />
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16}}>
          <Ionicons name="log-out-outline" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu width={40} height={40} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
