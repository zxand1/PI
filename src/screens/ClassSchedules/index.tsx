import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Platform,
  Text,
  UIManager,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import styles from './styles';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const horariosPorDia = [
  {
    dia: 'Segunda feira',
    aulas: [
      {
        horario: '18:50 - 19:40',
        disciplina: 'Economia',
        turma: 'SIN-7A-N',
        professor: 'Heitor Cunha Barros'
      },
      {
        horario: '19:40 - 20:30',
        disciplina: 'Economia',
        turma: 'SIN-7A-N',
        professor: 'Heitor Cunha Barros'
      },
      {
        horario: '20:40 - 21:20',
        disciplina: 'Tópicos Integradores',
        turma: 'SIN-7A-N',
        professor: 'Alexandre Henrick da Silva Alves'
      },
      {
        horario: '21:30 - 22:20',
        disciplina: 'Tópicos Integradores',
        turma: 'SIN-7A-N',
        professor: 'Alexandre Henrick da Silva Alves'
      },
    ]
  },
  {
    dia: 'terça Feira',
    aulas: [
      {
        horario: '18:50 - 19:40',
        disciplina: 'PROJETO INTEGRADOR VII',
        turma: 'SIN-7A-N',
        professor: 'EDER MANOEL DE SANTANA'
      },
      {
        horario: '19:40 - 20:30',
        disciplina: 'PROJETO INTEGRADOR VII',
        turma: 'SIN-7A-N',
        professor: 'EDER MANOEL DE SANTANA'
      },
      {
        horario: '20:40 - 21:20',
        disciplina: 'Tópicos Integradores',
        turma: 'SIN-7A-N',
        professor: 'Alexandre Henrick da Silva Alves'
      },
      {
        horario: '21:30 - 22:20',
        disciplina: 'Tópicos Integradores',
        turma: 'SIN-7A-N',
        professor: 'Alexandre Henrick da Silva Alves'
      }
    ]
  },
  {
    dia: 'Quarta Feira',
    aulas: [
      {
        horario: '18:50 - 19:40',
        disciplina: 'ORIENTAÇÃO DE ESTÁGIO I',
        turma: 'SIN-7A-N',
        professor: 'ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES'
      },
      {
        horario: '19:40 - 20:30',
        disciplina: 'ORIENTAÇÃO DE ESTÁGIO I',
        turma: 'SIN-7A-N',
        professor: 'ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES'
      },
      {
        horario: '20:40 - 21:20',
        disciplina: 'ORIENTAÇÃO DE ESTÁGIO I',
        turma: 'SIN-7A-N',
        professor: 'ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES'
      },
    ]
  },
  {
    dia: 'Quinta Feira',
    aulas: [
      {
        horario: '18:50 - 19:40',
        disciplina: 'ORIENTAÇÃO DE ESTÁGIO I',
        turma: 'SIN-7A-N',
        professor: 'ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES'
      },
      {
        horario: '19:40 - 20:30',
        disciplina: 'ORIENTAÇÃO DE ESTÁGIO I',
        turma: 'SIN-7A-N',
        professor: 'ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES'
      },
      {
        horario: '20:40 - 21:20',
        disciplina: 'TÓPICOS ESPECIAIS II',
        turma: 'SIN-7A-N',
        professor: 'JULIANA LILIS DA SILVA'
      },
      {
        horario: '21:30 - 22:20',
        disciplina: 'TÓPICOS ESPECIAIS II',
        turma: 'SIN-7A-N',
        professor: 'JULIANA LILIS DA SILVA'
      }
    ]
  },
  {
    dia: 'Sexta Feira',
    aulas: [
      {
        horario: '18:50 - 19:40',
        disciplina: 'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
        turma: 'SIN-7A-N',
        professor: 'RAFAEL MARINHO E SILVA'
      },
      {
        horario: '19:40 - 20:30',
        disciplina: 'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
        turma: 'SIN-7A-N',
        professor: 'RAFAEL MARINHO E SILVA'
      },
      {
        horario: '20:40 - 21:20',
        disciplina: 'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
        turma: 'SIN-7A-N',
        professor: 'RAFAEL MARINHO E SILVA'
      },
    ]
  },
];

const ClassSchedules = () => {
  const [selectedDia, setSelectedDia] = useState<string | null>(null);

  const diaEncontrado = horariosPorDia.find(d => d.dia === selectedDia);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.card}>
        <Picker
          selectedValue={selectedDia}
          onValueChange={(itemValue) => setSelectedDia(itemValue)}
        >
          <Picker.Item label="-- Selecione --" value={null} />
          {horariosPorDia.map(d => (
            <Picker.Item key={d.dia} label={d.dia} value={d.dia} />
          ))}
        </Picker>
      </View>

      {diaEncontrado && (
        <View style={styles.card}>
          {diaEncontrado.aulas.map((aula, index) => (
            <View key={index} style={styles.aulaBox}>
              <Text style={styles.horario}>{aula.horario}</Text>
              <Text style={styles.disciplina}>{aula.disciplina.toUpperCase()}</Text>
              <Text style={styles.turma}>{aula.turma}</Text>
              <Text style={styles.professor}>{aula.professor}</Text>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ClassSchedules;
