import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar as RNStatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import styles from './styles';
import ArrowTop from '@/assets/arrowTop.svg';
import ArrowBottom from '@/assets/arrowBottom.svg';

interface Subject {
  name: string;
  totalClasses: number;
  taughtClasses: number;
  allowedAbsences: number;
  absences: number;
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const subjects: Subject[] = [
  {
    name: 'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
    totalClasses: 70,
    taughtClasses: 30,
    allowedAbsences: 17,
    absences: 4,
  },
  {
    name: 'ECONOMIA',
    totalClasses: 47,
    taughtClasses: 18,
    allowedAbsences: 11,
    absences: 2,
  },
  {
    name: 'ESTÁGIO SUPERVISIONADO I',
    totalClasses: 103,
    taughtClasses: 47,
    allowedAbsences: 25,
    absences: 5,
  },
  {
    name: 'PROJETO INTEGRADOR VII',
    totalClasses: 49,
    taughtClasses: 18,
    allowedAbsences: 12,
    absences: 2,
  },
  {
    name: 'TÓPICOS ESPECIAIS II',
    totalClasses: 47,
    taughtClasses: 20,
    allowedAbsences: 11,
    absences: 4,
  },
  {
    name: 'TÓPICOS INTEGRADORES II',
    totalClasses: 110,
    taughtClasses: 36,
    allowedAbsences: 27,
    absences: 20,
  },
];

function calculateAbsencePercentage(absences: number, total: number): number {
  return parseFloat(((absences / total) * 100).toFixed(2));
}

function getAbsenceColorStyleKey(percentage: number): keyof typeof styles {
  if (percentage < 15) return 'cardsNotesApproved';
  if (percentage < 24) return 'cardsNotesDefault';
  return 'cardsNotesReproved';
}

export default function FrequencyScreen() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggleCard(name: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(expanded === name ? null : name);
  }

  return (
    <SafeAreaView style={styles.container}>
      <RNStatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.content} overScrollMode="never">
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, MATHEUS HENRIQUE DE DEUS</Text>
          <Text style={styles.registro}>REGISTRO ACADÊMICO: 22007228</Text>
          <Text style={styles.sistema}>SISTEMAS DE INFORMAÇÃO</Text>
        </View>

        <View style={styles.cards}>
          {subjects.map((subject, index) => {
            const isExpanded = expanded === subject.name;
            const percentage = calculateAbsencePercentage(subject.absences, subject.totalClasses);
            const colorKey = getAbsenceColorStyleKey(percentage);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.cardsContainer,
                  isExpanded && {
                    height: 'auto',
                    paddingBottom: 15,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  },
                ]}
                onPress={() => toggleCard(subject.name)}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardsTitle} numberOfLines={2}>
                      {subject.name}
                    </Text>
                  </View>
                  <Text style={styles[colorKey]}>{percentage}%</Text>
                  {isExpanded ? (
                    <ArrowTop width={20} height={20} style={{ marginLeft: 10 }} />
                  ) : (
                    <ArrowBottom width={20} height={20} style={{ marginLeft: 10 }} />
                  )}
                </View>

                {isExpanded && (
                  <View style={{ marginTop: 10, width: '100%', gap: 8 }}>
                    <Text>Total de aulas: {subject.totalClasses}</Text>
                    <Text>Aulas dadas: {subject.taughtClasses}</Text>
                    <Text>Faltas permitidas: {subject.allowedAbsences}</Text>
                    <Text>Faltas: {subject.absences}</Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      Percentual de faltas: {percentage}%
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.legendaContainer}>
          <LegendItem color="green" label="Número de faltas menor que 15%" />
          <LegendItem color="orange" label="Número de faltas entre 15% e 23%" />
          <LegendItem color="red" label="Número de faltas entre 24% e 25%" />
          <LegendItem color="darkred" label="Número de faltas já ultrapassou 25%" />
          <LegendItem color="#001F3F" label="Não foi possível carregar o número de faltas" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendaItem}>
      <View style={[styles.legendaBola, { backgroundColor: color }]} />
      <Text style={styles.legendaTexto}>{label}</Text>
    </View>
  );
}
