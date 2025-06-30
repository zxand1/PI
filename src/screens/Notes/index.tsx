import ArrowBottom from "@/assets/arrowBottom.svg";
import ArrowTop from "@/assets/arrowTop.svg";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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

function getScoreColorClass(percentage: number): keyof typeof styles {
  if (percentage >= 70) return "cardsNotesApproved";
  if (percentage >= 40) return "cardsNotesDefault";
  return "cardsNotesReproved";
}

export default function Notes() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [notes, setNotes] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.100.45:3000/discipline/2")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(
          data.map((d: any) => ({
            id: d.id,
            name: d.name,
          }))
        );
      });
    fetch("http://192.168.100.45:3000/note/2")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function toggleCard(name: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(expanded === name ? null : name);
  }

  function getEvaluationsByDiscipline(idDiscipline: number) {
    return notes
      .filter((n) => n.idDiscipline === idDiscipline)
      .map((n) => ({
        title: n.activity_name,
        score: n.grade_value,
        maxScore: n.activity_value,
        date: n.activity_date,
      }));
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
            const evaluations = getEvaluationsByDiscipline(subject.id);
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
        <View style={{ paddingHorizontal: 20, paddingBottom: 30, paddingTop: 10 }}>
          <LegendItem color="#43d19e" label="Nota igual ou superior a 70%" />
          <LegendItem color="#4f8cff" label="Nota entre 40% e 69%" />
          <LegendItem color="#ff7a59" label="Nota inferior a 40%" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: color, marginRight: 8 }} />
      <Text style={{ fontSize: 14, color: '#003366', fontWeight: '500' }}>{label}</Text>
    </View>
  );
}