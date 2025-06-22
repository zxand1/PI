
import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./style";

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
      <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16}}>
        <Ionicons name="log-out-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Menu width={40} height={40} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
