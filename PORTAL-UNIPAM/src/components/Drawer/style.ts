import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#014a8f',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userName: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  raContainer: {
    marginTop: 5,
    backgroundColor: '#edf1f7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#cfd8dc',
    borderWidth: 1,
  },
  raLabel: {
    fontSize: 10,
    color: '#555',
  },
  raValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#014a8f',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#014a8f',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default styles;