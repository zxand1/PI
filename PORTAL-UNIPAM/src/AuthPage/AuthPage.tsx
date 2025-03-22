import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://portal.unipam.edu.br/assets/images/logo.png" }} style={styles.logo} />

      <Text style={styles.title}>Acessar o Portal UNIPAM</Text>

      <Text style={styles.label}>Usuário</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Digite seu usuário"
          placeholderTextColor="#999"
        />
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Esqueceu a Senha ou Usuário Bloqueado?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-in" size={16} color="#fff" />
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 80,
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
    color: "#999",
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
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
