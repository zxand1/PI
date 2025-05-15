import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 10,
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
  contentHeader2: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "#000",
    fontSize: 30,
  },
  title2: {
    color: "#000",
    fontSize: 20,
  },
  contentWarningTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffb628",
    margin: 20,
    padding: 20,
    borderColor: "#ffb628",
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
    fontSize: 18,
    fontWeight: "bold",
    width: 250,
  },
  
  cardsMaterialsDefault: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: "#334c7d",
    borderRadius: 20,
    color: "white"
  },
  listaDisciplinasContainer: {
  backgroundColor: "#f0f0f0",
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 8,
  marginTop: 4,
},

listaDisciplina: {
  fontSize: 14,
  paddingVertical: 6,
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
  color: "#333",
},

materiaisContainer: {
  marginTop: 20,
  paddingHorizontal: 16,
},

materialCard: {
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: 16,
  marginBottom: 12,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
},

materialLabel: {
  fontSize: 14,
  color: "#333",
  marginBottom: 6,
},

extensaoBadge: {
  backgroundColor: "#39567c",
  alignSelf: "flex-start",
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: 20,
  marginTop: 4,
},

extensaoText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 12,
  textTransform: "lowercase",
},

botaoBaixar: {
  backgroundColor: "#004466",
  paddingVertical: 12,
  borderRadius: 6,
  marginTop: 6,
  alignItems: "center",
},

textoBotaoBaixar: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
},

});

export default styles;