import React, { useState } from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNFS from 'expo-file-system';
import FileViewer from 'react-native-file-viewer'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const disciplinasDisponiveis = [
  {
    id: 'SI2',
    nome: 'Desenvolvimento de Sistemas de Informação Avançados II',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ],
      arquivo: {
        nome: "Plano de Aula.pdf",
        url: "https://exemplo.com/Plano_de_Aula_SI2.pdf"
      }
    }
  },
  {
    id: 'SI2',
    nome: 'Projeto Integrador VII',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ]
    }
  },
  {
    id: 'SI2',
    nome: 'Tópicos Especiais II',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ]
    }
  },
  {
    id: 'SI2',
    nome: 'Economia',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ]
    }
  },
  {
    id: 'SI2',
    nome: 'Tópicos Integradores II',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ]
    }
  },
  {
    id: 'SI2',
    nome: 'Estágio Supervisionado I',
    dados: {
      tituloDisciplina: "Sistemas de Informação Avançados II",
      dataAula: "13/05/2025",
      titulo: "Introdução ao Desenvolvimento Mobile",
      objetivo: "Apresentar os objetivos da disciplina e ferramentas usadas.",
      conteudos: [
        "Apresentação da ementa",
        "Configuração de ambiente",
        "Instalação do React Native"
      ],
      metodologia: [
        "Aula expositiva",
        "Resolução prática de exercícios"
      ]
    }
  },
];

const ClassPlan = () => {
  const [selectedDisciplinaId, setSelectedDisciplinaId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const disciplinaSelecionada = disciplinasDisponiveis.find(d => d.id === selectedDisciplinaId);

  const abrirPdfLocal = async () => {
    try {
      const asset = Asset.fromModule(require('../../assets/pdfs/Proposta PI VII.pdf'));
      await asset.downloadAsync();

      const localUri = `${FileSystem.documentDirectory}Proposta PI VII.pdf`;

      await FileSystem.copyAsync({
        from: asset.localUri!,
        to: localUri
      });

      if (Platform.OS === 'ios') {
        await FileSystem.getContentUriAsync(localUri).then(uri => {
          Linking.openURL(uri);
        });
      } else {
        await Sharing.shareAsync(localUri);
      }

    } catch (error) {
      Alert.alert('Erro ao abrir PDF', (error as any)?.message || 'Erro desconhecido');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Selecione uma disciplina</Text>
      </View>

      <View style={styles.card}>
        <Picker
          selectedValue={selectedDisciplinaId}
          onValueChange={(itemValue) => setSelectedDisciplinaId(itemValue)}
        >
          <Picker.Item label="-- Selecione --" value={null} />
          {disciplinasDisponiveis.map(d => (
            <Picker.Item key={d.id} label={d.nome} value={d.id} />
          ))}
        </Picker>
      </View>

      {disciplinaSelecionada && (
        <View style={styles.card}>
          <Text style={styles.subTitle}>{disciplinaSelecionada.dados.titulo.toUpperCase()}</Text>
          <Text style={styles.date}>Data da Aula: {disciplinaSelecionada.dados.dataAula}</Text>

          <View style={styles.statusBox}>
            <Text style={styles.statusText}>Aula Realizada</Text>
          </View>

          <Text onPress={toggleExpanded} style={styles.toggleText}>
            {expanded ? 'Recolher ▲' : 'Ver detalhes ▼'}
          </Text>

          {expanded && (
            <>
              <Text style={styles.sectionTitle}>Título</Text>
              <Text style={styles.paragraph}>{disciplinaSelecionada.dados.titulo}</Text>

              <Text style={styles.sectionTitle}>Objetivo</Text>
              <Text style={styles.paragraph}>{disciplinaSelecionada.dados.objetivo}</Text>

              <Text style={styles.sectionTitle}>Conteúdo</Text>
              <View style={styles.listContainer}>
                {disciplinaSelecionada.dados.conteudos.map((item, index) => (
                  <Text key={index} style={styles.listItem}>• {item}</Text>
                ))}
              </View>

              <Text style={styles.sectionTitle}>Metodologias</Text>
              <View style={styles.tagsContainer}>
                {disciplinaSelecionada.dados.metodologia.map((item, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{item}</Text>
                  </View>
                ))}
              </View>
              {disciplinaSelecionada.dados.arquivo && (
                <>
                  <Text style={styles.sectionTitle}>Arquivo Anexo</Text>

                </>
              )}
              <TouchableOpacity onPress={abrirPdfLocal}>
                <Text style={styles.link}>📎 Abrir PDF local</Text>
              </TouchableOpacity>




            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ClassPlan;
