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

// Habilitar animações no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Disciplina {
  nome: string;
  totalAulas: number;
  aulasDadas: number;
  faltasPermitidas: number;
  faltas: number;
}

const disciplinas: Disciplina[] = [
  {
    nome: 'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
    totalAulas: 70,
    aulasDadas: 30,
    faltasPermitidas: 17,
    faltas: 4,
  },
  {
    nome: 'ECONOMIA',
    totalAulas: 47,
    aulasDadas: 18,
    faltasPermitidas: 11,
    faltas: 2,
  },
  {
    nome: 'ESTÁGIO SUPERVISIONADO I',
    totalAulas: 103,
    aulasDadas: 47,
    faltasPermitidas: 25,
    faltas: 5,
  },
  {
    nome: 'PROJETO INTEGRADOR VII',
    totalAulas: 49,
    aulasDadas: 18,
    faltasPermitidas: 12,
    faltas: 2,
  },
  {
    nome: 'TÓPICOS ESPECIAIS II',
    totalAulas: 47,
    aulasDadas: 20,
    faltasPermitidas: 11,
    faltas: 4,
  },
  {
    nome: 'TÓPICOS INTEGRADORES II',
    totalAulas: 110,
    aulasDadas: 36,
    faltasPermitidas: 27,
    faltas: 20,
  },
];

function calcularPorcentagem(faltas: number, total: number): number {
  return parseFloat(((faltas / total) * 100).toFixed(2));
}

function getAbsenceColorStyleKey(percentual: number): keyof typeof styles {
  if (percentual < 15) return 'cardsNotesApproved';
  if (percentual < 24) return 'cardsNotesDefault';
  return 'cardsNotesReproved';
}

export default function FrequencyScreen() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggleCard(nome: string) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(expanded === nome ? null : nome);
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
          {disciplinas.map((disciplina, index) => {
            const isExpanded = expanded === disciplina.nome;
            const percentual = calcularPorcentagem(disciplina.faltas, disciplina.totalAulas);
            const colorKey = getAbsenceColorStyleKey(percentual);

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
                onPress={() => toggleCard(disciplina.nome)}
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
                      {disciplina.nome}
                    </Text>
                  </View>
                  <Text style={styles[colorKey]}>{percentual}%</Text>
                  {isExpanded ? (
                    <ArrowTop width={20} height={20} style={{ marginLeft: 10 }} />
                  ) : (
                    <ArrowBottom width={20} height={20} style={{ marginLeft: 10 }} />
                  )}
                </View>

                {isExpanded && (
                  <View style={{ marginTop: 10, width: '100%', gap: 8 }}>
                    <Text>Total de aulas: {disciplina.totalAulas}</Text>
                    <Text>Aulas dadas: {disciplina.aulasDadas}</Text>
                    <Text>Faltas permitidas: {disciplina.faltasPermitidas}</Text>
                    <Text>Faltas: {disciplina.faltas}</Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      Percentual de faltas: {percentual}%
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
