import { Ionicons } from "@expo/vector-icons";
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
    { id: '1', disciplina: 'Projeto Integrador VII', atividade: 'Apresentação do Projeto', situacao: 'Em andamento', participacao: 'Sim' },
    { id: '2', disciplina: 'Topicos Especiais II', atividade: 'Seminário de Pesquisa', situacao: 'Finalizada', participacao: 'Não' },
    { id: '3', disciplina: 'Desenvolvimento Web', atividade: 'Entrega de Site', situacao: 'Em andamento', participacao: 'Sim' },
    { id: '4', disciplina: 'Topicos Integradores II', atividade: 'Relatório Parcial', situacao: 'Em andamento', participacao: 'Sim' },
    { id: '5', disciplina: 'Economia', atividade: 'Prova Final', situacao: 'Finalizada', participacao: 'Não' },
];

export default function Actividy() {

    const navigation = useNavigation<propStack>();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [attachedFiles, setAttachedFiles] = useState<{ [key: string]: any }>({});

    const handlePickFile = async (id: string) => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (result.assets && result.assets.length > 0) {
            const asset = result.assets[0];
            const folderUri = FileSystem.documentDirectory + "anexos/";
            await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true }).catch(() => { });
            const destPath = folderUri + asset.name;
            await FileSystem.copyAsync({ from: asset.uri, to: destPath });
            setAttachedFiles(prev => ({
                ...prev,
                [id]: { name: asset.name, uri: destPath }
            }));
            alert(`Arquivo salvo: ${asset.name}`);
        } else {
            setAttachedFiles(prev => {
                const copy = { ...prev };
                delete copy[id];
                return copy;
            });
        }
    };

    const handleDownloadFile = async (id: string) => {
        const file = attachedFiles[id];
        if (file && file.uri) {
            try {
                if (await Sharing.isAvailableAsync()) {
                    await Sharing.shareAsync(file.uri);
                } else {
                    alert('Compartilhamento não disponível neste dispositivo.');
                }
            } catch (error) {
                alert('Não foi possível abrir o arquivo.');
            }
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: "#f7faff" }]}>
            <Header />

            <View style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10 }}>
                <Text style={[styles.titulo, { color: "#003366", fontSize: 28, fontWeight: "bold" }]}>
                    Atividades
                </Text>
            </View>

            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
                renderItem={({ item }) => {
                    const isExpanded = expandedId === item.id;
                    const fileAttached = !!attachedFiles[item.id];
                    const isDone = fileAttached;

                    return (
                        <View
                            style={[
                                styles.card,
                                {
                                    backgroundColor: "#fff",
                                    borderRadius: 14,
                                    marginBottom: 16,
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.08,
                                    shadowRadius: 6,
                                    elevation: 2,
                                    padding: 18,
                                },
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                                activeOpacity={0.85}
                                style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "600",
                                            color: isDone ? "#43d19e" : "#003366",
                                            marginBottom: 2,
                                        }}
                                        numberOfLines={2}
                                    >
                                        {item.atividade}
                                    </Text>
                                    <Text style={{ color: "#003366", fontWeight: "500", fontSize: 15 }}>
                                        {item.disciplina}
                                    </Text>
                                    <Text style={{ color: "#4f8cff", fontWeight: "500", fontSize: 14 }}>
                                        {item.situacao}
                                    </Text>
                                    <Text style={{ color: isDone ? "#43d19e" : "#888", fontSize: 13 }}>
                                        Participação: {fileAttached ? "Sim" : "Não"}
                                    </Text>
                                </View>
                                <Ionicons
                                    name={isExpanded ? "chevron-up" : "chevron-down"}
                                    size={24}
                                    color="#003366"
                                    style={{ marginLeft: 10 }}
                                />
                            </TouchableOpacity>

                            {isExpanded && (
                                <View style={{ marginTop: 14, borderTopWidth: 1, borderTopColor: "#e6e6e6", paddingTop: 12 }}>
                                    <Text style={{ fontWeight: "bold", color: "#003366", marginBottom: 2 }}>Título:</Text>
                                    <Text style={{ color: "#222", marginBottom: 8 }}>Introdução ao Desenvolvimento Mobile</Text>

                                    <Text style={{ fontWeight: "bold", color: "#003366", marginBottom: 2 }}>Objetivo:</Text>
                                    <Text style={{ color: "#222", marginBottom: 8 }}>
                                        Apresentar os objetivos da disciplina e ferramentas usadas.
                                    </Text>

                                    <Text style={{ fontWeight: "bold", color: "#003366", marginBottom: 2 }}>Anexo:</Text>
                                    <Button title="Anexar Arquivo" color="#4f8cff" onPress={() => handlePickFile(item.id)} />
                                    {fileAttached && (
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ color: "#003366", fontWeight: "500" }}>
                                                Arquivo: {attachedFiles[item.id].name}
                                            </Text>
                                            <Button title="Abrir Arquivo" color="#43d19e" onPress={() => handleDownloadFile(item.id)} />
                                        </View>
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