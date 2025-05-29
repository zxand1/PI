import React, { useState } from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const horariosPorDia = [
  {
    id: 'SI2',
    dia: 'Segunda feira',
    disciplinas: ['Economia', 'Tópicos Integradores']
  },
  {
    id: 'SI3',
    dia: 'Terça Feira',
    disciplinas: ['Lógica de Programação', 'Banco de Dados']
  },
  {
    id: 'SI4',
    dia: 'Quarta Feira',
    disciplinas: ['Algoritmos', 'Engenharia de Software']
  },
  {
    id: 'SI5',
    dia: 'Quinta Feira',
    disciplinas: ['Matemática Discreta', 'Sistemas Operacionais']
  },
  {
    id: 'SI6',
    dia: 'Sexta Feira',
    disciplinas: ['Redes de Computadores', 'Projeto Integrador']
  },
];

const ClassSchedules = () => {
  const [selectedDia, setSelectedDia] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const diaEncontrado = horariosPorDia.find(d => d.dia === selectedDia);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Selecione um dia</Text>
      </View>

      <View style={styles.card}>
        <Picker
          selectedValue={selectedDia}
          onValueChange={(itemValue) => setSelectedDia(itemValue)}
        >
          <Picker.Item label="-- Selecione --" value={null} />
          {horariosPorDia.map(d => (
            <Picker.Item key={d.id} label={d.dia} value={d.dia} />
          ))}
        </Picker>
      </View>

      {diaEncontrado && (
        <View style={styles.card}>

          {expanded && (
            <>
              <Text style={styles.sectionTitle}>Disciplinas</Text>
              {diaEncontrado.disciplinas.map((disciplina, index) => (
                <Text key={index} style={styles.paragraph}>{disciplina}</Text>
              ))}
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ClassSchedules;
