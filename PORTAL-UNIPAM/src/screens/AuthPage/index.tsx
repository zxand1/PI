import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles";
import { propStack } from "../../route/Stack/Models";

const Stack = createStackNavigator();
export default function AuthPage() {
  const navigation = useNavigation<propStack>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<propStack>();


  function handleHome() {
    navigation.navigate("Home");
  }
  function handleFrequency() {
    navigation.navigate("Frequency");
  }

  function handleNotes () {
    navigation.navigate("Notes");
  }

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

      <TouchableOpacity style={styles.button} onPress={handleHome} >
        <Ionicons name="log-in" size={16} color="#fff" />
        <Text style={styles.buttonText}>ENTRAR</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFrequency} >
        <Ionicons name="log-in" size={16} color="#fff" />
        <Text style={styles.buttonText}>frenquency</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNotes}>
        <Ionicons name="log-in" size={16} color="#fff" />
        <Text style={styles.buttonText}>NOTES</Text>
      </TouchableOpacity>
    </View>
  );
}

