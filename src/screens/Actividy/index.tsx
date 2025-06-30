import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { propStack } from '../../route/Models';
import styles from './styles';

const DATA = [
    { id: '1', disciplina: 'Sistemas Aplicados', situacao: 'Em andamento', participacao: 'Sim' },
    { id: '2', disciplina: 'Banco de Dados', situacao: 'Finalizada', participacao: 'Não' },
    { id: '3', disciplina: 'Tópicos Especiais', situacao: 'Em andamento', participacao: 'Sim' },
];

export default function Actividy() {

    const navigation = useNavigation<propStack>();
    const [disciplina, setDisciplina] = useState("");

    const [situacao, setSituacao] = useState('Em andamento');

    const [participacao, setParticipacao] = useState("");

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const disciplinasUnicas = [...new Set(DATA.map(item => item.disciplina))];

    const dadosFiltrados = DATA.filter(item =>
        (disciplina ? item.disciplina === disciplina : true) &&
        (situacao ? item.situacao === situacao : true) &&
        (participacao ? item.participacao === participacao : true)
    );

    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handlePickFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (result.assets && result.assets.length > 0) {
            setSelectedFile(result.assets[0]);
            setParticipacao("Sim");
            alert(`Arquivo selecionado: ${result.assets[0].name}`);
        }
        else {
            setSelectedFile(null);
            setParticipacao("Nao");
        }
    }

    const handleDownloadFile = async () => {
        if (selectedFile && selectedFile.uri) {
            try {
                const destPath = FileSystem.documentDirectory + selectedFile.name;
                await FileSystem.copyAsync({
                    from: selectedFile.uri,
                    to: destPath,
                });
                if (await Sharing.isAvailableAsync()) {
                    await Sharing.shareAsync(destPath);
                } else {
                    alert('Compartilhamento não disponível neste dispositivo.');
                }
            } catch (error) {
                alert('Não foi possível abrir o arquivo.');
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View style={styles.tituloPag}>
                <Text style={styles.titulo}>Atividades</Text>
            </View>

            <View style={styles.filtros}>
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
            </View>

            <FlatList
                data={dadosFiltrados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isExpanded = expandedId === item.id;

                    return (
                        <View style={styles.card}>
                            <TouchableOpacity onPress={() => setExpandedId(isExpanded ? null : item.id)}>
                                <Text style={styles.title}>
                                    {item.disciplina} - {item.situacao} - Participação: {selectedFile ? "Sim" : "Nao"}
                                </Text>
                                <Text style={styles.expandToggle}>{isExpanded ? 'Recolher ▲' : 'Expandir ▼'}</Text>
                            </TouchableOpacity>

                            {isExpanded && (
                                <View style={styles.detail}>
                                    <Text style={styles.subtitle}>Título:</Text>
                                    <Text>Introdução ao Desenvolvimento Mobile</Text>

                                    <Text style={styles.subtitle}>Objetivo:</Text>
                                    <Text>Apresentar os objetivos da disciplina e ferramentas usadas.</Text>

                                    <Text style={styles.subtitle}>Anexo:</Text>
                                    <Button title="Anexar Arquivo" onPress={handlePickFile} />
                                    { }
                                    {selectedFile && (
                                        <>
                                            <Text style={styles.fileName}>Arquivo: {selectedFile.name}</Text>
                                            <Button title="Abrir Arquivo" onPress={handleDownloadFile} />
                                        </>
                                    )}
                                </View>
                            )}
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
}