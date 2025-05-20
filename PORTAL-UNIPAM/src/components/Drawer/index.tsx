import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <Text style={styles.userName}>ALEXANDRE DE OLIVEIRA PINHEIRO</Text>
        <View style={{flexDirection: 'row', gap: 20,}}>
          <View style={styles.raContainer}>
            <Text style={styles.raLabel}>REGISTRO ACADÊMICO:</Text>
            <Text style={styles.raValue}>22007289</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
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
        label="Plano de Aula"
        icon={() => <Icon name="archive" size={20} color="#014a8f" />}
        onPress={() => props.navigation.navigate('Plano de Aula')}
      />
    </DrawerContentScrollView>
  );
}