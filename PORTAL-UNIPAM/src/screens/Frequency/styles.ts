import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 24,
  },
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
  cards: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  cardsContainer: {
    height: 60,
    borderColor: '#2c3131',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  cardsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 250,
    color: '#000',
  },
  cardsNotesApproved: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: '#6fc872cc',
    borderRadius: 20,
    color: 'white',
    overflow: 'hidden',
  },
  cardsNotesReproved: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: '#ff5c5ccc',
    borderRadius: 20,
    color: 'white',
    overflow: 'hidden',
  },
  cardsNotesDefault: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: '#334c7d',
    borderRadius: 20,
    color: 'white',
    overflow: 'hidden',
  },
  legendaContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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

export default styles;
