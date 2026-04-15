import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../screens/ThemeContext";
import { useContext } from "react";

export default function ProfileScreen({navigation}) {
  const { darkMode, toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image
        source={require("../../assets/logo4.png")}
        style={styles.image}
      />
      <Text style={[styles.name, { color: theme.colors.text }]}>usuario demo</Text>
      <Text style={[styles.email, { color: theme.colors.text }]}>usuario@example.com</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]} 
        onPress={() => navigation.navigate("Ajustes")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>Ajustes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: "#007AFF",
    marginBottom: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  }
});