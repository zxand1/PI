import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Modal, Text, Pressable } from "react-native";
import styles from "./style";

type DrawerParamList = {
  Home: undefined;
  Frequency: undefined;
  Notes: undefined;
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.header}>
      <Logo width={35} height={35} />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu width={35} height={35} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 24,
            minWidth: 220,
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 16, marginBottom: 16 }}>Nenhuma mensagem</Text>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: '#007bff',
                borderRadius: 6,
                paddingVertical: 8,
                paddingHorizontal: 20
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
