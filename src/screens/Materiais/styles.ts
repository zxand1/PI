import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
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
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "#003366",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    color: "#003366",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cards: {
    flex: 1,
    padding: 16,
    gap: 18,
  },
  cardsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#003366', // azul escuro
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  cardsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#003366', // azul escuro
    textAlign: 'left',
    flexShrink: 1,
  },
  listaDisciplinasContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#003366', // azul escuro
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
  },
  listaDisciplina: {
    fontSize: 15,
    color: '#003366', // azul escuro
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  materiaisContainer: {
    padding: 16,
    gap: 16,
  },
  materialCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#003366', // azul escuro
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    gap: 10,
  },
  materialLabel: {
    fontSize: 15,
    color: '#003366', // azul escuro
    marginBottom: 4,
  },
  extensaoBadge: {
    backgroundColor: '#003366', // azul escuro
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  extensaoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  botaoBaixar: {
    backgroundColor: '#43d19e',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  textoBotaoBaixar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;