import React, { useEffect } from 'react';
import { View, Text, Linking, StyleSheet, ActivityIndicator } from 'react-native';

interface SubDrawerLinkProps {
  route: {
    params?: {
      url: string;
    };
  };
}

export default function Eventos({ route }: SubDrawerLinkProps) {
  const url = route.params?.url;

  useEffect(() => {
    if (url) {
      Linking.openURL(url);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Abrindo link externo...</Text>
      <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: '500' },
});
