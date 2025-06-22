import ArrowBottom from "@/assets/arrowBottom.svg";
import ArrowTop from "@/assets/arrowTop.svg";
import PrinterIcon from "@/assets/printer-svgrepo-com.svg";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

interface PaymentInfo {
  title: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
}

const paymentData: PaymentInfo = {
  title: "Mens. Graduação Ref. Parc. No.5",
  amount: 1365.0,
  dueDate: "12/05/2025",
  isPaid: false,
};

export default function Finance() {
  const [expanded, setExpanded] = useState<boolean>(false);

  function toggleCard() {
    setExpanded(!expanded);
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

        <TouchableOpacity
          style={styles.boletoCard}
          activeOpacity={0.9}
          onPress={toggleCard}
        >
          {/* Cabeçalho do boleto */}
          <View style={styles.cardHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.boletoCardTitle}>{paymentData.title} Aluno(a)</Text>
              <Text style={styles.boletoInfo}>ALEXANDRE DE OLIVEIRA PINHEIRO</Text>
              <Text style={styles.boletoInfo}>Curso: SISTEMAS DE INFORMAÇÃO</Text>
              <Text style={styles.boletoValor}>R$ {paymentData.amount.toFixed(2)}</Text>
              <Text style={styles.boletoVencimento}>Vence em {paymentData.dueDate}</Text>
            </View>
            {expanded ? <ArrowTop width={20} height={20} /> : <ArrowBottom width={20} height={20} />}
          </View>

          {/* Corpo expandido */}
          {expanded && (
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
                  <Text style={styles.boletoDetailsValue}>3876360</Text>
                </View>
                <View style={styles.boletoDetailsItem}>
                  <Text style={styles.boletoDetailsLabel}>Período</Text>
                  <Text style={styles.boletoDetailsValue}>1/2025</Text>
                </View>
                <View style={styles.boletoDetailsItem}>
                  <Text style={styles.boletoDetailsLabel}>Emitido em</Text>
                  <Text style={styles.boletoDetailsValue}>27/12/2024</Text>
                </View>
              </View>

              <View style={styles.boletoDetailsRow}>
                <View style={styles.boletoDetailsItem}>
                  <Text style={styles.boletoDetailsLabel}>Valor Original</Text>
                  <Text style={styles.boletoDetailsValue}>R$ 1.365,00</Text>
                </View>
                <View style={styles.boletoDetailsItem}>
                  <Text style={styles.boletoDetailsLabel}>Valor Desconto</Text>
                  <Text style={styles.boletoDetailsValue}>R$ 0,00</Text>
                </View>
                <View style={styles.boletoDetailsItem}>
                  <Text style={styles.boletoDetailsLabel}>Valor Pago</Text>
                  <Text style={styles.boletoDetailsValue}>R$ 0,00</Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

