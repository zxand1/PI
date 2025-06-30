import ArrowBottom from "@/assets/arrowBottom.svg";
import ArrowTop from "@/assets/arrowTop.svg";
import PrinterIcon from "@/assets/printer-svgrepo-com.svg";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import styles from "./style";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Finance() {
  const [finances, setFinances] = useState<Array<{
    name: string;
    reference: number;
    emission_date: string;
    due_date: string;
    value: number;
    interest: number;
    fine: number;
    discount: number;
    scholarship_value: number;
    paid_value: number;
    status: string;
  }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://192.168.100.45:3000/finance/2')
      .then(async (response) => {
        if (!response.ok) throw new Error('Erro ao buscar dados financeiros');
        const data = await response.json();
        const financeData = data.finance;
        setFinances(Array.isArray(financeData) ? financeData : [financeData]);
      })
      .catch(() => setError('Erro ao carregar dados financeiros'))
      .finally(() => setLoading(false));
  }, []);

  function toggleCard(idx: number) {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Header />
      <ScrollView style={styles.content} overScrollMode="never">
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Financeiro</Text>
        </View>

        <View style={styles.contentWarningTitle}>
          <Text style={styles.contentWarning}>
            <Ionicons name="information-circle-outline" size={20} color="#003366" />
            Antes de realizar o pagamento, certifique-se de que o nome presente no boleto pertença à FEPAM - FUND EDUC DE PATOS DE MINAS.
          </Text>
        </View>

        {loading ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Carregando...</Text>
        ) : error ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>{error}</Text>
        ) : finances.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum boleto encontrado.</Text>
        ) : (
          finances.map((finance, idx) => (
            <TouchableOpacity
              key={finance.reference ?? idx}
              style={styles.boletoCard}
              activeOpacity={0.9}
              onPress={() => toggleCard(idx)}
            >
              <View style={styles.cardHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.boletoCardTitle}>{finance.name}</Text>
                  <Text style={styles.boletoInfo}>Aluno(a)</Text>
                  <Text style={styles.boletoInfo}>Curso: Sistemas de Informação</Text>
                  <Text style={styles.boletoValor}>R$ {(finance.value ?? 0).toFixed(2)}</Text>
                  <Text style={styles.boletoVencimento}>Vence em {finance.due_date ? new Date(finance.due_date).toLocaleDateString() : '-'}</Text>
                </View>
                {expandedIndex === idx ? <ArrowTop width={20} height={20} /> : <ArrowBottom width={20} height={20} />}
              </View>

              {expandedIndex === idx && (
                <View>
                  <View style={styles.boletoBadge}>
                    <Text style={styles.boletoBadgeText}>Mensalidade</Text>
                  </View>

                  <View style={styles.boletoActions}>
                    <PrinterIcon width={22} height={22} />
                    <TouchableOpacity style={styles.boletoButtonDisabled} disabled>
                      <Text style={styles.boletoButtonDisabledText}>Realizar pagamento</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boletoDetailsRow}>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Referência</Text>
                      <Text style={styles.boletoDetailsValue}>{finance.reference}</Text>
                    </View>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Período</Text>
                      <Text style={styles.boletoDetailsValue}>
                        {finance.due_date ? `${new Date(finance.due_date).getMonth() + 1}/${new Date(finance.due_date).getFullYear()}` : '-'}
                      </Text>
                    </View>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Emitido em</Text>
                      <Text style={styles.boletoDetailsValue}>
                        {finance.emission_date ? new Date(finance.emission_date).toLocaleDateString() : '-'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.boletoDetailsRow}>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Valor Original</Text>
                      <Text style={styles.boletoDetailsValue}>R$ {(finance.value ?? 0).toFixed(2)}</Text>
                    </View>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Valor Desconto</Text>
                      <Text style={styles.boletoDetailsValue}>R$ {(finance.discount ?? 0).toFixed(2)}</Text>
                    </View>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Valor Pago</Text>
                      <Text style={styles.boletoDetailsValue}>R$ {(finance.paid_value ?? 0).toFixed(2)}</Text>
                    </View>
                  </View>
                  <View style={styles.boletoDetailsRow}>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Bolsa</Text>
                      <Text style={styles.boletoDetailsValue}>R$ {(finance.scholarship_value ?? 0).toFixed(2)}</Text>
                    </View>
                    <View style={styles.boletoDetailsItem}>
                      <Text style={styles.boletoDetailsLabel}>Status</Text>
                      <Text style={styles.boletoDetailsValue}>{finance.status}</Text>
                    </View>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

