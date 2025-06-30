import React from 'react';
import { View, Text, ScrollView, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import Header from '../../components/Header';
const contatosMockados = [
  {
    id: '1',
    nome: 'Academia de Musculação',
    telefone: '(34) 3823-0182',
    email: 'gilsoncb@unipam.edu.br',
  },
  {
    id: '2',
    nome: 'Agência Experimental Crivo - 300 F',
    telefone: '(34) 3823-0133',
    email: 'reginamacedo@unipam.edu.br',
  },
  {
    id: '3',
    nome: 'Ambulatório de Enfermagem "Anna Nery" - 212 D',
    telefone: '(34) 3823-0202',
    email: 'isa@unipam.edu.br',
  },
  {
    id: '4',
    nome: 'Âncora Núcleo de Inovação Tecnológica',
    telefone: '(34) 3823-0312',
    email: 'nit@unipam.edu.br',
  },
  {
    id: '5',
    nome: 'Ascender Inteligência Empresarial',
    telefone: '((34) 3823-0154',
    email: 'ascender@unipam.edu.br',
  },
  {
    id: '6',
    nome: 'Assessoria Educacional',
    telefone: '(34) 3823-0331',
    email: 'assessoriaeducacional@unipam.edu.br',
  },
  {
    id: '7',
    nome: 'Assessoria da Reitoria',
    telefone: '(34) 3823-0342	',
    email: 'imprensa@unipam.edu.br',
  },
];

export default function Contacts() {
  return (
    <SafeAreaView style={styles.container}>
      <RNStatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Header />

      <ScrollView style={styles.content} overScrollMode="never">
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Contatos</Text>
        </View>

        <View style={styles.contentWarningTitle}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="information-circle-outline" size={20} color="#003366" />
            <Text style={[styles.contentWarning, { marginLeft: 6 }]}>
              Mantenha seus contatos atualizados para facilitar a comunicação com os orientadores e coordenação.
            </Text>
          </View>
        </View>

        {contatosMockados.map((contato) => (
          <View key={contato.id} style={styles.boletoCard}>
            <View style={styles.cardHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.boletoCardTitle}>Local:{contato.nome}</Text>
                <Text style={styles.boletoInfo}>Telefone: {contato.telefone}</Text>
                <Text style={styles.boletoInfo}>E-mail: {contato.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
