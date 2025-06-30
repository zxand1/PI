import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { propsNavigationStack } from '../../route/Models';
import styles from './styles';

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

  const [disciplines, setDisciplines] = useState<
    { id: number; name: string; teacher: string; teacherEmail: string }[]
  >([]);
  const [loadingDisciplines, setLoadingDisciplines] = useState<boolean>(true);
  const [errorDisciplines, setErrorDisciplines] = useState<string | null>(null);

  const [expandedDisciplina, setExpandedDisciplina] = useState<number | null>(null);

  const [student, setStudent] = useState<{
    name: string;
    academic_registry: string;
    course: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch('http://192.168.100.150:3000/student/2')
      .then(async (response) => {
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        setStudent(data);
      })
      .catch(() => setError('Erro ao carregar dados do estudante'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch('http://192.168.100.150:3000/discipline/2')
      .then(async (response) => {
        if (!response.ok) throw new Error('Erro ao buscar disciplinas');
        const data = await response.json();
        setDisciplines(Array.isArray(data) ? data : []);
      })
      .catch(() => setErrorDisciplines('Erro ao carregar disciplinas'))
      .finally(() => setLoadingDisciplines(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Header />
      <ScrollView contentContainerStyle={styles.container2}>
        <View style={styles.header}>
          {loading ? (
            <Text style={styles.greeting}>Carregando...</Text>
          ) : error ? (
            <Text style={styles.greeting}>{error}</Text>
          ) : student ? (
            <>
              <Text style={styles.greeting}>Olá, {student.name}</Text>
              <Text style={styles.registro}>REGISTRO ACADÊMICO: {student.academic_registry}</Text>
              <Text style={styles.sistema}>{student.course}</Text>
            </>
          ) : null}
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Atividades{"\nenviadas:"}</Text>
            <Text style={styles.cardValue}>16</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.cardTitle}>Atividades{"\npara enviar:"}</Text>
            <Text style={styles.cardValue}>1</Text>
          </View>
          <View style={styles.card3}>
            <Text style={styles.cardTitle}>Pesquisas{"\ndisponíveis:"}</Text>
            <Text style={styles.cardValue}>0</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disciplinas</Text>
          {loadingDisciplines ? (
            <Text style={styles.item}>Carregando...</Text>
          ) : errorDisciplines ? (
            <Text style={styles.item}>{errorDisciplines}</Text>
          ) : disciplines.length === 0 ? (
            <Text style={styles.item}>Nenhuma disciplina encontrada.</Text>
          ) : (
            disciplines.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.buttonDisciplina}
                onPress={() => {
                  setExpandedDisciplina(expandedDisciplina === index ? null : index);
                }}
              >
                <Text style={styles.item}>{item.name}</Text>
                {expandedDisciplina === index && (
                  <View style={styles.item}>
                    <Text style={styles.itemDetalhe}>Professor: {item.teacher}</Text>
                    <View style={styles.separator} />
                    <Text style={styles.itemDetalhe}>Email: {item.teacherEmail}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))
          )}
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
            <Text style={styles.timeText}>Desenvolvimento Web II - 18:50 - 19:40</Text>
          </View>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Desenvolvimento Web II - 19:40 - 20:30</Text>
          </View>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Orientação de Estágio I - 20:30 - 21:20</Text>
          </View>
          <View style={styles.timeSlot}>
            <View style={styles.circle}></View>
            <Text style={styles.timeText}>Orientação de Estágio I - 20:30 - 21:20</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Atividades</Text>
        <View style={styles.section2}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 10, }}
            onPress={() => navigation.navigate('Actividy')}>
            <Text style={styles.activity}>Atividade Avaliativa - 07/04/2025 -</Text>
            <Text style={styles.pendente}>Pendente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

