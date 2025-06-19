import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  header: {
    marginBottom: 16,
    padding: 10,
  },
  breadcrumb: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    margin: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  statusBox: {
    backgroundColor: '#DFF5E1',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  statusText: {
    color: '#2F7A3E',
    fontWeight: '600',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
    color: '#222',
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
    lineHeight: 20,
  },
  listContainer: {
    paddingLeft: 10,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#2B4B73',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  toggleText: {
    color: '#1A73E8',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    alignSelf: 'flex-end',
  },  
  link: {
  color: '#007bff',
  textDecorationLine: 'underline',
  marginTop: 8,
},
aulaBox: {
  backgroundColor: '#FFFFFF',
  borderColor: '#E0E0E0',
  borderWidth: 1,
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 16,
  marginBottom: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
},

horario: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#1F2937',
  textAlign: 'right',
  marginBottom: 8,
},

disciplina: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#1F2937',
  marginBottom: 2,
},

turma: {
  fontSize: 13,
  color: '#4B5563',
  marginBottom: 2,
},

professor: {
  fontSize: 13,
  color: '#6B7280',
},


});

export default styles;
