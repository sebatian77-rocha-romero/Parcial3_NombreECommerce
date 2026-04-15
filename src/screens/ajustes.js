import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../screens/ThemeContext";

export default function AjustesScreen() {
  const { darkMode, toggleTheme, theme } = useContext(ThemeContext);

  return (
    <View style={[
      styles.container,
      { backgroundColor: theme.colors.background }
    ]}> 
      
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Ajustes
      </Text>

      

      <Text style={[styles.option, { color: theme.colors.text }]}>
        Notificaciones
      </Text>
      <Text style={[styles.option, { color: theme.colors.text }]}>
        Privacidad
      </Text>
      <Text style={[styles.option, { color: theme.colors.text }]}>
        Idioma
      </Text>
      <Text style={[styles.option, { color: theme.colors.text }]}>
        Cuenta
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.colors.primary } // 🔥 dinámico
        ]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: "#000" }]}>
          Cambiar a {darkMode ? "modo claro" : "modo oscuro"}
        </Text>
      </TouchableOpacity>
      {/*Indicador de tema */}
      <Text style={[styles.tem, { color: theme.colors.text }]}>
        Tema: {darkMode ? "Oscuro 🌙" : "Claro ☀️"}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    bottom: 200,
    right: 140
  },
  option: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
    left: 20,
    bottom: 180,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
    height: 50,
    borderRadius: 100,
    padding: 15,
    bottom: 150,
  },
  tem: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
    textAlign: "center",
    bottom: 130,
  },
});