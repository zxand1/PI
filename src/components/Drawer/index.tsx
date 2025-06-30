import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default function CustomDrawerContent(props: any) {
  const [showLinksUteis, setShowLinksUteis] = useState(false);
  const [student, setStudent] = useState<{
    name: string;
    academic_registry: string;
    course: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://192.168.100.45:3000/student/2')
      .then(async (response) => {
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        setStudent(data);
      })
      .catch(() => setError('Erro ao carregar dados do estudante'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        {loading ? (
          <Text style={styles.userName}>Carregando...</Text>
        ) : error ? (
          <Text style={styles.userName}>{error}</Text>
        ) : student ? (
          <>
            <Text style={styles.userName}>{student.name}</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={styles.raContainer}>
                <Text style={styles.raLabel}>REGISTRO ACADÊMICO:</Text>
                <Text style={styles.raValue}>{student.academic_registry}</Text>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => props.navigation.navigate('AuthPage')}
              >
                <Text style={styles.logoutText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>

      <View style={styles.divider} />

      <DrawerItem
        label="Início"
        icon={() => <Icon name="home-outline" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Frequência"
        icon={() => <Icon name="chart-line" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Frequência')}
      />
      <DrawerItem
        label="Notas"
        icon={() => <Icon name="clipboard-text-outline" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Notas')}
      />
      <DrawerItem
        label="Financeiro"
        icon={() => <Icon name="cash-multiple" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Financeiro')}
      />
      <DrawerItem
        label="Materiais"
        icon={() => <Icon name="archive" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Materiais')}
      />
      <DrawerItem
        label="Atividades"
        icon={() => <Icon name="book" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Actividy')}
      />
      <DrawerItem
        label="Contatos"
        icon={() => <Icon name="contacts" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Contacts')}
      />

      <View >
        <DrawerItem
          label="Links Úteis"
          icon={() => <Icon name="folder-information-outline" size={20} color="#014a8f" />}
          onPress={() => setShowLinksUteis(!showLinksUteis)}
        />
        <View style={{ position: 'absolute', right: 30, top: 14 }}>
          <Icon
            name={showLinksUteis ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#014a8f"
          />
        </View>
      </View>

      {showLinksUteis && (
        <View>
          <DrawerItem
            label="Bolsas"
            icon={() => <Icon name="school-outline" size={20} color="#014a8f" />}
            onPress={() => Linking.openURL('https://bolsas.unipam.edu.br/')}
            style={{ paddingLeft: 30 }}
          />
          <DrawerItem
            label="Unichamados"
            icon={() => <Icon name="web" size={20} color="#014a8f" />}
            onPress={() => Linking.openURL('https://unipam.ellevo.com/external-user/knowledge-base')}
            style={{ paddingLeft: 30 }}
          />
          <DrawerItem
            label="Eventos"
            icon={() => <Icon name="calendar-month-outline" size={20} color="#014a8f" />}
            onPress={() => Linking.openURL('https://unieventos.unipam.edu.br/EventoVersao/Index?ReturnUrl=%2f')}
            style={{ paddingLeft: 30 }}
          />
          <DrawerItem
            label="Wifi UNIPAM"
            icon={() => <Icon name="wifi" size={20} color="#014a8f" />}
            onPress={() => Linking.openURL('https://wifi.unipam.edu.br/')}
            style={{ paddingLeft: 30 }}
          />
        </View>
      )}
    </DrawerContentScrollView>
  );
}