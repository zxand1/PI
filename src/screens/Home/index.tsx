
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LayoutAnimation, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import styles from './styles';
import Actividy from '../Actividy';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { propsNavigationStack } from '../../route/Models';

interface Calendar {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export default function Home() {
  const navigation = useNavigation<NavigationProp<propsNavigationStack>>();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(formattedDate);

  const disciplinas = [
    'DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II',
    'ECONOMIA',
    'ESTÁGIO SUPERVISIONADO I',
    'PROJETO INTEGRADOR VII',
  ];

  const detalhes = [
    {
      Professor: 'Rafael Marinho e Silva',
      Email: 'rafaelmarinho@unipam.edu.br',
    },
    {
      Professor: 'Heitor Cunha Barros',
      Email: 'heitorcb@unipam.edu.br'
    },
    {
      Professor: 'Henaldo Barros Moraes',
      Professor2: 'Adriene Sttéfane Silva',
      Email: 'henaldo@unipam.edu.br',
      Email2: 'sttefane@unipam.edu.br'
    },
    {
      Professor: 'Eder Manoeal de Santana',
      Email: 'eder@unipam.edu.br'
    },
    {
      Professor: 'Juliana Lilis da Silva',
      Email: 'juliana@unipam.edu.br'
    },
    {
      Professor: 'Alexandre Henrick da Silva Alves',
      Email: 'alexandrehs@unipam.edu.br'
    },
  ]

  const [expandedDisciplina, setExpandedDisciplina] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Header />

      <ScrollView contentContainerStyle={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, MATHEUS HENRIQUE DE DEUS</Text>
          <Text style={styles.registro}>REGISTRO ACADÊMICO: 22007228</Text>
          <Text style={styles.sistema}>SISTEMAS DE INFORMAÇÃO</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Atividades Enviadas</Text>
            <Text style={styles.cardValue}>16</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.cardTitle}>Atividades Para Enviar</Text>
            <Text style={styles.cardValue}>1</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.cardTitle}>Pesquisas Disponíveis</Text>
            <Text style={styles.cardValue}>0</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disciplinas</Text>
          {disciplinas.map((disciplina, index) => (
            <TouchableOpacity
              key={index}
              style={styles.buttonDisciplina}
              onPress={() => {
                setExpandedDisciplina(expandedDisciplina === index ? null : index);
              }}
            >
              <Text style={styles.item}>{disciplina}</Text>
              {expandedDisciplina === index && (
                <View style={styles.item}>
                  {detalhes[index].Professor && (
                    <>
                      <Text style={styles.itemDetalhe}>Professor: {detalhes[index].Professor}</Text>
                      {(detalhes[index].Email || detalhes[index].Professor2 || detalhes[index].Email2) && (
                        <View style={styles.separator} />
                      )}
                    </>
                  )}

                  {detalhes[index].Email && (
                    <>
                      <Text style={styles.itemDetalhe}>Email: {detalhes[index].Email}</Text>
                    </>
                  )}
                  {detalhes[index].Professor2 && (
                    <>
                      <View style={styles.separator} />
                      <Text style={styles.itemDetalhe}>Professor: {detalhes[index].Professor2}</Text>
                      <View style={styles.separator} />
                    </>
                  )}
                  {detalhes[index].Email2 && (
                    <>
                      <Text style={styles.itemDetalhe}>Email: {detalhes[index].Email2}</Text>
                      <View style={styles.separator} />
                    </>
                  )}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Calendário</Text>
          <Text style={styles.date}>Abril - 2025</Text>

          <Calendar
            current={selectedDate}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#003366',
                selectedTextColor: 'white',
              },
            }}
            monthFormat={'yyyy - MM'}
            onDayPress={(day: Calendar) => {
              setSelectedDate(day.dateString);
              console.log('Data selecionada:', day.dateString);
            }}
            theme={{
              backgroundColor: 'white',
              calendarBackground: 'white',
              dayTextColor: 'black',
              todayTextColor: '#003366',
              arrowColor: '#003366',
              selectedDayBackgroundColor: '#003366',
              selectedDayTextColor: 'white',
              textDisabledColor: '#d9d9d9',
              dotColor: '#003366',
              todayDotColor: '#003366',
              monthTextColor: '#003366',
              indicatorColor: '#003366',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horários</Text>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Orientação de Estágio I - 18:50 - 19:40</Text>
          </View>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Orientação de Estágio I - 19:40 - 20:30</Text>
          </View>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Orientação de Estágio I - 20:30 - 21:20</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Atividades</Text>
        <View style={styles.section2}>
          <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}
            onPress={() => navigation.navigate('Actividy')}>
            <Text style={styles.activity}>Atividade Avaliativa - 07/04/2025 -</Text>
            <Text style={styles.pendente}>Pendente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
