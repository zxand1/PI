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
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function Materials() {
  const navigation = useNavigation<propStack>();

  const [open, setOpen] = useState(false);
  const [selectDisciplina, setSelectedDisciplina] = useState<string | null>(null);

  const disciplinas = [
    "DESENVOLVIMENTO DE SISTEMAS DE INFIRMAÇÃO AVANÇADOS II",
    "ECONOMIA",
    "ESTAGIO SUPERVISIONADO",
    "ORIENTAÇÃO DE ESTÁGIO",
    "PROJETO INTEGRADOR VII",
  ];

  const materiais = [
    {
      nome: "Módulo 1 - Introdução à economia 1",
      extensao: "pdf",
      disciplina: "ECONOMIA",
    },

    {
      nome: "Introdução - IA",
      extensao: "pdf",
      disciplina: "DESENVOLVIMENTO DE SISTEMAS DE INFIRMAÇÃO AVANÇADOS II",
    },

    {
      nome: "Apresentação  IA",
      extensao: "pdf",
      disciplina: "TÓPICOS INTEGRADORES"
    },
  ]

  const arquivos: Record<string, string> = {
    "Módulo 1 - Introdução à economia 1": "https://eppg.fgv.br/sites/default/files/teste.pdf",
    "Introdução - IA": "https://eppg.fgv.br/sites/default/files/teste.pdf",
    "Apresentação  IA": "https://eppg.fgv.br/sites/default/files/teste.pdf",
  }

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const materiaisFiltrados = selectDisciplina
    ? materiais.filter((m) => m.disciplina === selectDisciplina)
    : materiais;

  async function handleDownload(nome: string) {
  const url = arquivos[nome];
  if (!url) {
    alert("Arquivo não encontrado.");
    return;
  }
  const fileUri = FileSystem.documentDirectory + nome.replace(/\s+/g, "_") + ".pdf";
  try {
    const downloadResumable = FileSystem.createDownloadResumable(
      url,
      fileUri
    );
    const result = await downloadResumable.downloadAsync();
    if (result && result.uri) {
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(result.uri);
      } else {
        alert(`Arquivo salvo em: ${result.uri}`);
      }
    } else {
      alert("Falha ao baixar o arquivo.");
    }
  } catch (e) {
    alert("Erro ao baixar o arquivo.");
  }
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
            <Text style={styles.cardsTitle} numberOfLines={2} ellipsizeMode="tail">
              {selectDisciplina ?? "Todos os Materiais"}
            </Text>
            {open ? (
              <Ionicons name="chevron-up" size={20} color="#000" />
            ) : (
              <Ionicons name="chevron-down" size={20} color="#000" />
            )}
          </TouchableOpacity>

          {open && (
            <View style={styles.listaDisciplinasContainer}>
              <TouchableOpacity onPress={() => setSelectedDisciplina(null)}>
                <Text style={styles.listaDisciplina}>Todos</Text>
              </TouchableOpacity>

              {disciplinas.map((disciplina, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedDisciplina(disciplina);
                    setOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.listaDisciplina,
                      selectDisciplina === disciplina && { fontWeight: "bold" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {disciplina}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.materiaisContainer}>
          {materiaisFiltrados.length === 0 ? (
            <Text style={{ textAlign: "center", marginTop: 20 }}>Nenhum material encontrado.</Text>
          ) : (
            materiaisFiltrados.map((material, index) => (
              <View key={index} style={styles.materialCard}>
                {/* ...existing code for material card... */}
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
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}