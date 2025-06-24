import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from "./styles";
import { propStack } from "../../route/Models";

export default function AuthPage() {
  const navigation = useNavigation<propStack>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
      setUsername('');
      setPassword('');
      setShowPassword(false);
    }, 100);
    }, [])
  )

  function handleLogin() {
    if (!username || !password) {
      Alert.alert("Campos obrigatórios", "Preencha usuário e senha");
      return;
    }
    
    if (username === "admin" && password === "1234") {
      navigation.navigate("Drawer");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://portal.unipam.edu.br/assets/media/img/logo/logo-4.png" }} style={styles.logo} />
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Ionicons name="log-in" size={16} color="#fff" />
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
