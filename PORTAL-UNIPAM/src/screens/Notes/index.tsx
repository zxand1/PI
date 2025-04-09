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

export default function Notes() {
  const navigation = useNavigation<propStack>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <View style={styles.header}>
        <Logo width={40} height={40} />
        <Menu width={40} height={40} color={"white"} />
      </View>
      <ScrollView
        style={styles.content}
        overScrollMode="never"
      >
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Notas</Text>
        </View>
        <Text style={styles.contentWarningTitle}><Ionicons name="alert-circle" size={20} color="#ffb628" />Aviso: <Text> </Text>
          <Text style={styles.contentWarning}>
            O resultado final pode sofrer alteração até o final
            do semestre. Se o somatório da nota não estiver
            de acordo com o resultado final apresentado,
            aguarde até o dia seguinte, pois o cálculo é
            executado diariamente.
          </Text>
        </Text>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Desenvolvimento de Sistemas de Informação Avançados II</Text>
            <Text style={styles.cardsNotesApproved}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Economia</Text>
            <Text style={styles.cardsNotesReproved}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Estágio Supervisionado I</Text>
            <Text style={styles.cardsNotesDefault}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Projeto Integrador VII</Text>
            <Text style={styles.cardsNotesApproved}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Tópicos Especiais II</Text>
            <Text style={styles.cardsNotesDefault}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardsContainer}>
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Tópicos Integradores II</Text>
            <Text style={styles.cardsNotesApproved}>0/20</Text>
            <ArrowBottom width={20} height={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
