import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    padding: "2%",
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E90FF',
    padding: 16,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },

  card2: {
    backgroundColor: '#FF6347',
    padding: 16,
    borderRadius: 8,
    marginLeft: 6,
    width: '30%',
    alignItems: 'center',
  },

  card3: {
    backgroundColor: '#3CB371',
    padding: 16,
    borderRadius: 8,
    marginLeft: 6,
    width: '30%',
    alignItems: 'center',
  },

  cardTitle: {
    fontWeight: 'bold',
    color: 'white'
  },
  cardValue: {
    fontSize: 18,
    color: 'white'
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    color: 'white',
  },
  date: {
    fontSize: 16,
    color: '#003366',
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 10,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  activity: {
    marginVertical: 5,
    color: '#333',
  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 13,
    width: '100%',
  },
  pendente: {
    backgroundColor: '#FF6347',
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFAFA',
    marginLeft: 8,
  },
  buttonDisciplina: {
    backgroundColor: '#003366',
    borderRadius: 8,
    marginTop: 10,
  },
  itemDetalhe: {
    flexDirection: 'column',
    color: 'white',
    padding: '1%',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 4,
  }
});

export default styles;
