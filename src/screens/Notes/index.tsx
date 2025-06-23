import ArrowBottom from "@/assets/arrowBottom.svg";
import ArrowTop from "@/assets/arrowTop.svg";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import styles from "./styles";

interface Evaluation {
  title: string;
  score: number;
  maxScore: number;
  date: string;
}

interface SubjectNote {
  name: string;
  evaluations: Evaluation[];
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const subjects: SubjectNote[] = [
  {
    name: "Desenvolvimento de Sistemas de Informação Avançados II",
    evaluations: [
      { title: "Prova 1", score: 14, maxScore: 14, date: "28/03/2025" },
      { title: "Prática 1", score: 0, maxScore: 6, date: "28/03/2025" },
    ],
  },
  {
    name: "Economia",
    evaluations: [{ title: "Prova Única", score: 6, maxScore: 10, date: "20/03/2025" }],
  },
  {
    name: "Estágio Supervisionado I",
    evaluations: [],
  },
  {
    name: "Projeto Integrador VII",
    evaluations: [{ title: "Trabalho", score: 0, maxScore: 20, date: "15/03/2025" }],
  },
  {
    name: "Tópicos Especiais II",
    evaluations: [{ title: "Prova", score: 7, maxScore: 10, date: "10/03/2025" }],
  },
  {
    name: "Tópicos Integradores II",
    evaluations: [
      { title: "Entrega 1", score: 15, maxScore: 15, date: "05/03/2025" },
      { title: "Entrega 2", score: 10, maxScore: 13, date: "15/04/2025" },
    ],
  },
];

function getScoreColorClass(percentage: number): keyof typeof styles {
  if (percentage >= 70) return "cardsNotesApproved";
  if (percentage >= 40) return "cardsNotesDefault";
  return "cardsNotesReproved";
}

export default function Notes() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggleCard(name: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(expanded === name ? null : name);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Header />
      <ScrollView style={styles.content} overScrollMode="never">
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Notas</Text>
        </View>

        <Text style={styles.contentWarningTitle}>
          <Ionicons name="alert-circle" size={20} color="#ffb628" /> Aviso:{" "}
          <Text style={styles.contentWarning}>
            O resultado final pode sofrer alteração até o final do semestre. Se
            o somatório da nota não estiver de acordo com o resultado final
            apresentado, aguarde até o dia seguinte, pois o cálculo é executado
            diariamente.
          </Text>
        </Text>

        <View style={styles.cards}>
          {subjects.map((subject, index) => {
            const isExpanded = expanded === subject.name;
            const { evaluations } = subject;
            const score = evaluations.reduce((sum, ev) => sum + ev.score, 0);
            const total = evaluations.reduce((sum, ev) => sum + ev.maxScore, 0);
            const percentage = total > 0 ? (score / total) * 100 : 0;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.cardsContainer,
                  isExpanded && {
                    height: "auto",
                    paddingBottom: 15,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                ]}
                onPress={() => toggleCard(subject.name)}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardsTitle} numberOfLines={2}>
                      {subject.name}
                    </Text>
                  </View>
                  <Text style={styles[getScoreColorClass(percentage)]}>
                    {score}/{total || 20}
                  </Text>
                  {isExpanded ? (
                    <ArrowTop width={20} height={20} style={{ marginLeft: 10 }} />
                  ) : (
                    <ArrowBottom width={20} height={20} style={{ marginLeft: 10 }} />
                  )}
                </View>
                {isExpanded && evaluations.length > 0 && (
                  <View style={{ marginTop: 10, width: "100%", gap: 8 }}>
                    {evaluations.map((evalItem, i) => (
                      <View
                        key={i}
                        style={{
                          borderTopWidth: 1,
                          borderTopColor: "#ccc",
                          paddingVertical: 5,
                          flex: 1,
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>{evalItem.title}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                          <Text>Nota:</Text>
                          <Text>
                            {evalItem.score}/{evalItem.maxScore}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                          <Text>Data:</Text>
                          <Text>{evalItem.date}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
                {isExpanded && evaluations.length === 0 && (
                  <Text style={{ marginTop: 10, fontStyle: "italic", color: "#777" }}>
                    Nenhuma nota disponível.
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
