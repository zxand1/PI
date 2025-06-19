import React from "react";
import { View, TouchableOpacity } from "react-native";
import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerParamList = {
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={styles.header}>
      <Logo width={40} height={40} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Menu width={40} height={40} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
