import React from "react";
import { View } from "react-native";
import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo width={40} height={40} />
      <Menu width={40} height={40} color={"white"} />
    </View>
  );
};