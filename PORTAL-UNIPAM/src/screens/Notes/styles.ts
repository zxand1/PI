import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#073b59",
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
  }
});

export default styles;