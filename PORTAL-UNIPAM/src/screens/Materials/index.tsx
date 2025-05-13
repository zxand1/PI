import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import ArrowBottom from "@/assets/arrowBottom.svg";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { propStack } from "../../route/Stack/Models";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";

export default function Materials() {
  const navigation = useNavigation<propStack>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
     <Header/>
      <ScrollView
        style={styles.content}
        overScrollMode="never"
      >
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Materiais</Text>
        </View>
        
        <View style={styles.contentHeader2}>
          <Text style={styles.title2}>Disciplinas</Text>
        </View>
        
        <View style={styles.cards}>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Todos os Materiais</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
