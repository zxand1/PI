import React from 'react';
import { ScrollView, Text, View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import Header from '../../components/Header';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

// Ativar animações no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type ClassPlanRouteProp = RouteProp<RootStackParamList, 'ClassPlan'>;

const ClassPlan = () => {
  const route = useRoute<ClassPlanRouteProp>();

  const fallback = {
    tituloDisciplina: "Sistemas de Informação Avançados II",
    dataAula: "13/05/2025",
    titulo: "Introdução ao Desenvolvimento Mobile",
    objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
    conteudos: [
      "Apresentação da ementa",
      "Configuração de ambiente",
      "Instalação do React Native"
    ],
    metodologia: [
      "Aula expositiva",
      "Resolução prática de exercícios"
    ]
  };

  const {
    tituloDisciplina,
    dataAula,
    titulo,
    objetivo,
    conteudos,
    metodologia
  } = route.params ?? fallback;

  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.breadcrumb}>Plano de Aula /</Text>
        <Text style={styles.title}>{tituloDisciplina}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subTitle}>{titulo.toUpperCase()}</Text>
        <Text style={styles.date}>Data da Aula: {dataAula}</Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>Aula Realizada</Text>
        </View>

        <Text onPress={toggleExpanded} style={styles.toggleText}>
          {expanded ? 'Recolher ▲' : 'Ver detalhes ▼'}
        </Text>

        {expanded && (
          <>
            <Text style={styles.sectionTitle}>Título</Text>
            <Text style={styles.paragraph}>{titulo}</Text>

            <Text style={styles.sectionTitle}>Objetivo</Text>
            <Text style={styles.paragraph}>{objetivo}</Text>

            <Text style={styles.sectionTitle}>Conteúdo</Text>
            <View style={styles.listContainer}>
              {conteudos.map((item, index) => (
                <Text key={index} style={styles.listItem}>• {item}</Text>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Metodologias</Text>
            <View style={styles.tagsContainer}>
              {metodologia.map((item, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ClassPlan;
