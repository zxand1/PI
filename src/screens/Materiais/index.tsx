import Logo from "@/assets/logoWhite.svg";
import Menu from "@/assets/menu.svg";
import ArrowBottom from "@/assets/arrowBottom.svg";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { propStack } from "../../route/Models";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";

export default function Materials() {
  const navigation = useNavigation<propStack>();

  const [open, setOpen] = useState(false);

  const disciplinas = [
    "DESENVOLVIMENTO DE SISTEMAS DE INFIRMAÇÃO AVANÇADOS II",
    "ECONOMIA",
    "ESTPAGUI SUPERVISIONADO",
    "ORIENTAÇÃO DE ESTÁGIO",
    "PROJETO INTEGRADOR VII",
  ];

  const materiais = [
    {
      nome: "Módulo 1 - Introdução à economia 1",
      extensao: "pdf",
    },

    {
      nome: "Introdução - IA",
      extensao: "pdf",
    },

    {
      nome: "Apresentação  IA",
      extensao: "pdf",
    },
  ]

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

    function handleDownload(nome: string) {
    // Aqui você pode adicionar lógica para baixar o arquivo
    alert(`Baixando: ${nome}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <Header />
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
          <TouchableOpacity
           style={styles.cardsContainer}
           activeOpacity={0.7}
           onPress={toggleOpen}
           >
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">Todos os Materiais</Text>
            {open ? (
                <Ionicons name = "chevron-up" size={20} color="#000" />
            ) : (
              <Ionicons name="chevron-down" size={20} color="#000" />
            )}
          </TouchableOpacity>

          {open && (
            <View style={styles.listaDisciplinasContainer}>
              {disciplinas.map((disciplina, index) => (
                <Text
                  key={index}
                  style={styles.listaDisciplina}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  >
                    {disciplina}
                    </Text>
              ))}
              </View>
          )}

        </View> 

<View style={styles.materiaisContainer}>
          {materiais.map((material, index) => (
            <View key={index} style={styles.materialCard}>
              <Text style={styles.materialLabel}>
                <Text style={{ fontWeight: "bold" }}>Material:{"\n"}</Text>
                {material.nome}
              </Text>

              <Text style={styles.materialLabel}>
                <Text style={{ fontWeight: "bold" }}>Extensão:{"\n"}</Text>
                <View style={styles.extensaoBadge}>
                  <Text style={styles.extensaoText}>{material.extensao}</Text>
                </View>
              </Text>

              <Text style={styles.materialLabel}>
                <Text style={{ fontWeight: "bold" }}>Ação:</Text>
              </Text>
              <TouchableOpacity
                style={styles.botaoBaixar}
                activeOpacity={0.7}
                onPress={() => handleDownload(material.nome)}
              >
                <Text style={styles.textoBotaoBaixar}>Baixar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}