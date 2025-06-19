import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, List, PaperProvider } from 'react-native-paper';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

type DiaDaSemana = 'Segunda-Feira' | 'Terça-Feira' | 'Quarta-Feira' | 'Quinta-Feira' | 'Sexta-Feira';

const diasDaSemana: DiaDaSemana[] = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
];

const schedule: Record<DiaDaSemana, { horario: string; disciplina: string; professor: string }[]> = {
    "Segunda-Feira": [
        {
            horario: "18:50 - 19:40",
            disciplina: "ECONOMIA",
            professor: "HEITOR CUNHA BARROS",
        },
        {
            horario: "19:40 - 20:30",
            disciplina: "ECONOMIA",
            professor: "HEITOR CUNHA BARROS",
        },
        {
            horario: "20:40 - 21:20",
            disciplina: "TÓPICOS INTEGRADORES II",
            professor: "ALEXANDRE HENRICK DA SILVA ALVES",
        },
        {
            horario: "21:30 - 22:30",
            disciplina: "TÓPICOS INTEGRADORES II",
            professor: "ALEXANDRE HENRICK DA SILVA ALVES",
        },
    ],
    "Terça-Feira": [
        {
            horario: "18:50 - 19:40",
            disciplina: "PROJETO INTEGRADOR VII",
            professor: "EDER MANOEL DE SANTANA",
        },
        {
            horario: "19:40 - 20:30",
            disciplina: "PROJETO INTEGRADOR VII",
            professor: "EDER MANOEL DE SANTANA",
        },
        {
            horario: "20:40 - 21:20",
            disciplina: "TÓPICOS INTEGRADORES II",
            professor: "ALEXANDRE HENRICK DA SILVA ALVES",
        },
        {
            horario: "21:30 - 22:30",
            disciplina: "TÓPICOS INTEGRADORES II",
            professor: "ALEXANDRE HENRICK DA SILVA ALVES",
        },
    ],
    "Quarta-Feira": [
        {
            horario: "18:50 - 19:40",
            disciplina: "ORIENTAÇÃO DE ESTÁGIO I",
            professor: "ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES",
        },
        {
            horario: "19:40 - 20:30",
            disciplina: "ORIENTAÇÃO DE ESTÁGIO I",
            professor: "ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES",
        },
        {
            horario: "20:40 - 21:20",
            disciplina: "ORIENTAÇÃO DE ESTÁGIO I",
            professor: "ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES",
        },
    ],
    "Quinta-Feira": [
        {
            horario: "18:50 - 19:40",
            disciplina: "ORIENTAÇÃO DE ESTÁGIO I",
            professor: "ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES",
        },
        {
            horario: "19:40 - 20:30",
            disciplina: "ORIENTAÇÃO DE ESTÁGIO I",
            professor: "ADRIENE STTÉFANE SILVA, HENALDO BARROS MORAES",
        },
        {
            horario: "20:40 - 21:20",
            disciplina: "TÓPICOS ESPECIAIS II",
            professor: "JULIANA LILIS DA SILVA",
        },
        {
            horario: "21:30 - 22:30",
            disciplina: "TÓPICOS INTEGRADORES II",
            professor: "JULIANA LILIS DA SILVA",
        },
    ],
    "Sexta-Feira": [
        {
            horario: "18:50 - 19:40",
            disciplina: "DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II",
            professor: "RAFAEL MARINHO E SILVA",
        },
        {
            horario: "19:40 - 20:30",
            disciplina: "DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II",
            professor: "RAFAEL MARINHO E SILVA",
        },
        {
            horario: "20:40 - 21:20",
            disciplina: "DESENVOLVIMENTO DE SISTEMAS DE INFORMAÇÃO AVANÇADOS II",
            professor: "RAFAEL MARINHO E SILVA",
        },
    ],
};

export default function ClassSchedules() {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar translucent />
                <Header />

                <ScrollView contentContainerStyle={{ padding: 16 }}>
                    <Text style={styles.title}>Horários de Aula</Text>

                    <List.Section>
                        {diasDaSemana.map((dia) => {
                            const aulas = schedule[dia];

                            return (
                                <List.Accordion
                                    key={dia}
                                    title={dia}
                                    left={(props) => <List.Icon {...props} icon="calendar" />}
                                >
                                    {aulas.length === 0 ? (
                                        <Text style={styles.emptyText}>Sem aulas</Text>
                                    ) : (
                                        aulas.map((aula, index) => (
                                            <Card key={index} style={styles.card}>
                                                <Card.Content>
                                                    <Text style={styles.time}>{aula.horario}</Text>
                                                    <Text style={styles.subject}>{aula.disciplina}</Text>
                                                    <Text style={styles.professor}>{aula.professor}</Text>
                                                </Card.Content>
                                            </Card>
                                        ))
                                    )}
                                </List.Accordion>
                            );
                        })}
                    </List.Section>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
}
