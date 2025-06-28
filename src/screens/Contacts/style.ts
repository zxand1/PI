import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentHeader: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "#000",
    fontSize: 24,
  },
  contentWarningTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    margin: 20,
    padding: 20,
    borderColor: "#003366",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  contentWarning: {
    fontWeight: "400",
    fontSize: 15,
    color: "#003366",
  },

  boletoCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 20,
    marginBottom: 15,
    gap: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boletoCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  boletoInfo: {
    fontSize: 14,
    color: "#444",
  },

  // Cabeçalho do aluno
  header: {
    backgroundColor: '#003366',
    borderRadius: 12,
    padding: 10,
    margin: 10,
    
  },
   greeting: {
    color: '#fff',
    fontSize: 22,
  },
  registro: {
    color: '#fff',
  },
  sistema: {
    color: '#fff',
    marginBottom: 8,
  },
});

export default styles;
