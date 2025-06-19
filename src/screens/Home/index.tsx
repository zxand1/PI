import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './styles';

interface Calendar {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}


export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <TouchableOpacity style={styles.item}>
          <Text style={styles.sistema}>DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.sistema}>ECONOMIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.sistema}>ESTÁGIO SUPERVISIONADO I</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.sistema}>PROJETO INTEGRADOR VII</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calendário</Text>
        <Text style={styles.date}>Abril - 2025</Text>

        <Calendar
          current={formattedDate}
          markedDates={{
            [formattedDate]: {
              selected: true,
              selectedColor: '#003366',
              selectedTextColor: 'white',
            },
          }}
          monthFormat={'yyyy - MM'}
          onDayPress={(day: Calendar) => {
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Atividades</Text>
        <Text style={styles.activity}>Atividade Avaliativa - 07/04/2025 - Pendende</Text>
      </View>
    </ScrollView>
  );
};


