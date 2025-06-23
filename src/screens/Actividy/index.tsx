import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { PropStack } from '../../routes/Stack';
import styles from './styles';


const navigation = useNavigation<PropStack>();

const handlePress = (item: any) => {
    navigation.navigate('Detalhes', { atividade: item });
};

const DATA = [
    { id: '1', disciplina: 'Matemática', situacao: 'Em andamento', participacao: 'Sim' },
    { id: '2', disciplina: 'História', situacao: 'Finalizada', participacao: 'Não' },
    { id: '3', disciplina: 'Português', situacao: 'Em andamento', participacao: 'Sim' },
];

export default function Actividy() {



    const [disciplina, setDisciplina] = useState("");
    const [situacao, setSituacao] = useState('Em andamento');
    const [participacao, setParticipacao] = useState("");

    const disciplinasUnicas = [...new Set(DATA.map(item => item.disciplina))];

    const dadosFiltrados = DATA.filter(item =>
        (disciplina ? item.disciplina === disciplina : true) &&
        (situacao ? item.situacao === situacao : true) &&
        (participacao ? item.participacao === participacao : true)
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.label}>Disciplina</Text>
            <Picker
                selectedValue={disciplina}
                onValueChange={(itemValue) => setDisciplina(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Selecione uma opção" value="" />
                {disciplinasUnicas.map(d => (
                    <Picker.Item key={d} label={d} value={d} />
                ))}
            </Picker>

            <Text style={styles.label}>Situação</Text>
            <Picker
                selectedValue={situacao}
                onValueChange={(itemValue) => setSituacao(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Em andamento" value="Em andamento" />
                <Picker.Item label="Finalizada" value="Finalizada" />
            </Picker>

            <Text style={styles.label}>Participação</Text>
            <Picker
                selectedValue={participacao}
                onValueChange={(itemValue) => setParticipacao(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Selecione uma opção" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
            </Picker>

            <FlatList
                data={dadosFiltrados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
                        <View style={styles.item}>
                            <Text>{item.disciplina} - {item.situacao} - Participação: {item.participacao}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}