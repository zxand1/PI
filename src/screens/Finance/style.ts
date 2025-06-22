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
    alignItems: "center"
  },
  contentWarning: {
    fontWeight: "regular",
    fontSize: 15,
  },
  cards: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  cardsContainer: {
    height: 60,
    borderColor: "#2c3131",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  cardsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    width: 250,
  },
  cardsNotesApproved: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: "#6fc872cc",
    borderRadius: 20,
    color: "white"
  },
  cardsNotesReproved: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: "#ff5c5ccc",
    borderRadius: 20,
    color: "white"
  },
  cardsNotesDefault: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: "#334c7d",
    borderRadius: 20,
    color: "white"
  },  
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boletoCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 20,
    gap: 10,
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
  boletoValor: {
    fontSize: 24,
    color: "#e59200",
    fontWeight: "bold",
  },
  boletoVencimento: {
    fontSize: 14,
    color: "#666",
  },
  boletoBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#263fa3",
    borderRadius: 20,
  },
  boletoBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
  boletoActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  boletoButtonDisabled: {
    backgroundColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  boletoButtonDisabledText: {
    color: "#888",
    fontWeight: "bold",
  },
  boletoDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  boletoDetailsItem: {
    flex: 1,
    alignItems: "flex-start",
  },
  boletoDetailsLabel: {
    fontSize: 12,
    color: "#666",
  },
  boletoDetailsValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

});

export default styles;
