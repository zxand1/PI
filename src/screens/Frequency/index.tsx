import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


type propStack = ReturnType<typeof useNavigation<() => void>>;


interface Disciplina {
    nome: string;
    totalAulas: number;
    aulasDadas: number;
    faltasPermitidas: number;
    faltas: number;
}

const Frequency = () => {
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

    const calcularPorcentagem = (faltas: number, total: number): number => {
        return parseFloat(((faltas / total) * 100).toFixed(2));
    };

    const corPorcentagem = (percentual: number): string => {
        if (percentual < 15) return 'green';
        if (percentual < 24) return 'orange';
        if (percentual <= 25) return 'red';
        return 'darkred';
    };

    const FrequenciaScreen = () => {
        const [expanded, setExpanded] = useState<string>('');

        const handlePress = (nome: string) => {
            setExpanded(expanded === nome ? '' : nome);
        };

        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Olá, MATHEUS HENRIQUE DE DEUS</Text>
                    <Text style={styles.registro}>REGISTRO ACADÊMICO: 22007228</Text>
                    <Text style={styles.sistema}>SISTEMAS DE INFORMAÇÃO</Text>
                </View>

                {disciplinas.map((disciplina, idx) => {
                    const percentual = calcularPorcentagem(disciplina.faltas, disciplina.totalAulas);

                    return (
                        <View key={idx} style={styles.accordionContainer}>
                            <List.Accordion
                                title={disciplina.nome}
                                expanded={expanded === disciplina.nome}
                                onPress={() => handlePress(disciplina.nome)}
                                left={(props) => (
                                    <Avatar.Icon
                                        {...props}
                                        icon="check-circle"
                                        color={corPorcentagem(percentual)}
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                )}
                            >
                                <View style={styles.details}>
                                    <Text>Total de aulas: {disciplina.totalAulas}</Text>
                                    <Text>Aulas dadas: {disciplina.aulasDadas}</Text>
                                    <Text>Faltas permitidas: {disciplina.faltasPermitidas}</Text>
                                    <Text>Faltas: {disciplina.faltas}</Text>
                                    <Text style={{ color: corPorcentagem(percentual), fontWeight: 'bold' }}>
                                        Faltas: {percentual}%
                                    </Text>
                                </View>
                            </List.Accordion>
                        </View>
                    );
                })}

                <View style={styles.legendaContainer}>
                    <View style={styles.legendaItem}>
                        <View style={[styles.legendaBola, { backgroundColor: 'green' }]} />
                        <Text style={styles.legendaTexto}>Número de faltas menor que 15%</Text>
                    </View>
                    <View style={styles.legendaItem}>
                        <View style={[styles.legendaBola, { backgroundColor: 'orange' }]} />
                        <Text style={styles.legendaTexto}>Número de faltas entre 15% e 23%</Text>
                    </View>
                    <View style={styles.legendaItem}>
                        <View style={[styles.legendaBola, { backgroundColor: 'red' }]} />
                        <Text style={styles.legendaTexto}>Número de faltas entre 24% e 25%</Text>
                    </View>
                    <View style={styles.legendaItem}>
                        <View style={[styles.legendaBola, { backgroundColor: 'darkred' }]} />
                        <Text style={styles.legendaTexto}>Número de faltas já ultrapassou 25%</Text>
                    </View>
                    <View style={styles.legendaItem}>
                        <View style={[styles.legendaBola, { backgroundColor: '#001F3F' }]} />
                        <Text style={styles.legendaTexto}>Não foi possível carregar o número de faltas</Text>
                    </View>
                </View>
            </ScrollView>
        );
    };

    return <FrequenciaScreen />;
};

export default Frequency;
