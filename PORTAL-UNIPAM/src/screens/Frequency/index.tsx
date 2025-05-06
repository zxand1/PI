import React, { useState } from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import styles from './styles';

interface Subject {
  name: string;
  totalClasses: number;
  taughtClasses: number;
  allowedAbsences: number;
  absences: number;
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

function getAbsenceColor(percentage: number): string {
  if (percentage < 15) return 'green';
  if (percentage < 24) return 'orange';
  if (percentage <= 25) return 'red';
  return 'darkred';
}

export default function FrequencyScreen() {
  const [expandedSubject, setExpandedSubject] = useState<string>('');

  function handleAccordionToggle(name: string) {
    setExpandedSubject(expandedSubject === name ? '' : name);
  }

  return (
    <SafeAreaView style={styles.content}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, MATHEUS HENRIQUE DE DEUS</Text>
          <Text style={styles.registro}>REGISTRO ACADÊMICO: 22007228</Text>
          <Text style={styles.sistema}>SISTEMAS DE INFORMAÇÃO</Text>
        </View>

        {subjects.map((subject, idx) => {
          const percentage = calculateAbsencePercentage(subject.absences, subject.totalClasses);
          const color = getAbsenceColor(percentage);

          return (
            <View key={idx} style={styles.accordionContainer}>
              <List.Accordion
                title={subject.name}
                expanded={expandedSubject === subject.name}
                onPress={() => handleAccordionToggle(subject.name)}
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="check-circle"
                    color={color}
                    style={{ backgroundColor: 'transparent' }}
                  />
                )}
              >
                <View style={styles.details}>
                  <Text>Total de aulas: {subject.totalClasses}</Text>
                  <Text>Aulas dadas: {subject.taughtClasses}</Text>
                  <Text>Faltas permitidas: {subject.allowedAbsences}</Text>
                  <Text>Faltas: {subject.absences}</Text>
                  <Text style={{ color, fontWeight: 'bold' }}>
                    Faltas: {percentage}%
                  </Text>
                </View>
              </List.Accordion>
            </View>
          );
        })}

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
