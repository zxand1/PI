import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 90,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: "#003366",
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    color: "black",
    marginBottom: 5,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotText: {
    color: "#003366",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#003366",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export default styles;