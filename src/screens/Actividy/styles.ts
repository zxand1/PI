import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  filtros:{
    padding: 16,
  },
  header: {
    marginBottom: 16,
    padding: 10,
  },
  label: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 8, 
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  card:{
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  title:{
    fontWeight:'bold',
    fontSize: 16,
  },
  expandToggle:{
    color: '#007BFF',
    marginTop: 4,
  },
  detail:{
    marginTop: 12,
  },
  subtitle:{
    fontWeight: 'bold',
    marginTop: 8,
  }
});
