import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.userName}>{user?.name}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>✅ Você está autenticado!</Text>
          <Text style={styles.cardText}>
            Esta é uma rota privada protegida pelo Expo Router. Você só consegue
            acessar esta tela porque fez login com sucesso.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🎯 Recursos Implementados:</Text>
          <Text style={styles.infoItem}>
            ✅ Expo Router (navegação moderna)
          </Text>
          <Text style={styles.infoItem}>
            ✅ AsyncStorage (persistência de dados)
          </Text>
          <Text style={styles.infoItem}>✅ Rotas privadas automáticas</Text>
          <Text style={styles.infoItem}>✅ Cadastro de usuários</Text>
          <Text style={styles.infoItem}>✅ Login persistente</Text>
          <Text style={styles.infoItem}>✅ Validação de dados</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Dica:</Text>
          <Text style={styles.tipText}>
            Seus dados ficam salvos mesmo se você fechar o app! Use o botão
            "Sair" no perfil para fazer logout.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  emoji: {
    fontSize: 80,
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    color: "#007aff",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
    cardText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    },
    infoCard: {
    backgroundColor: "#e3f2fd",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#90caf9",
    },
    infoTitle: {
        
    },
});
