import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    paddingHorizontal:10
  },
  time: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
  subject: {
    fontSize: 16,
    marginTop: 5,
  },
  professor: {
    fontSize: 14,
    color: 'gray',
  },
  emptyText: {
    padding: 15,
    textAlign: 'center',
    color: 'gray',
  },
});

export default styles