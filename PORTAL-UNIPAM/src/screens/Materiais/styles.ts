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
  }
});

export default styles;