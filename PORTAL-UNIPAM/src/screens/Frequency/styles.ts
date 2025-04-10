import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  accordionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 6,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  details: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  legendaContainer: {
    marginTop: 20,
    paddingHorizontal: 8,
    paddingBottom: 40,
  },
  legendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendaBola: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendaTexto: {
    fontSize: 14,
    color: '#333',
  },
});

