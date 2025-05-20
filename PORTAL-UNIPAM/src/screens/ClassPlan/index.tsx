import React, { useState } from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer'

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
      const fileName = 'Proposta PI VII.pdf';

      const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      if (Platform.OS === 'android') {
        const assetPath = `bundle-assets://${fileName}`;
        await RNFS.copyFileAssets(fileName, destPath);
      } else {
        const assetPath = `${RNFS.MainBundlePath}/${fileName}`;
        await RNFS.copyFile(assetPath, destPath);
      }

      await FileViewer.open(destPath, { showOpenWithDialog: true });
    } catch (error) {
      console.error('Erro ao tentar abrir o PDF:', error);
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
                <Text style={styles.link}>📎 Plano_de_Aula_SI2.pdf</Text>
              </TouchableOpacity>


            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ClassPlan;
