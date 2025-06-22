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
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },

  card2: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    marginLeft: 6,
    width: '30%',
    alignItems: 'center',
  },

  card3: {
    backgroundColor: 'green',
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
    backgroundColor: '#003366',
    marginBottom: 8,
    borderRadius: 6,
  },
  date: {
    fontSize: 16,
    color: '#003366',
  },
  // Estilos para os horários
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red', // Cor para o status do horário
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
});

export default styles;
