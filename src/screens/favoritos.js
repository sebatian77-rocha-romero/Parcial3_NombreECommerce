import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { ThemeContext } from "../screens/ThemeContext";


export default function FavoritosScreen({ Fav, setFav }) {
  const { theme } = useContext(ThemeContext);


  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Mis favoritos</Text>

      <FlatList
        data={Fav}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={[styles.name, { color: theme.colors.text }]}>{item.name}</Text>
              <Text style={[styles.price, { color: theme.colors.text }]}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => {
                    setFav(prev => prev.filter((_, i) => i !== index));
                    }}
                >
                <Ionicons
                    name="trash-outline"  
                    size={30}
                    color='red'
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>
            No tienes productos favoritos
          </Text>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // 🔥 espacio para footer
      />

      {/* FOOTER FIJO */}
      {Fav.length > 0 && (
        <View style={[styles.footer, { backgroundColor: theme.colors.card }]}>
          <Text style={[styles.cant, { color: theme.colors.text }]}>
            Items: {Fav.length}
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    top: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  cant: {
    fontSize: 20,
    bottom: 4,
    fontWeight: "600",
    textAlign: "left",
  },
  card: {
    flexDirection: "row",
    borderRadius: 12,
    marginTop: 30,
    overflow: "hidden",
    elevation: 3,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  image: {
    position: "static",
    width: 90,
    height: 100,
    border: "5px solid #ccc",
  },
  info: {
    padding: 22,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: "600",
  },
  total: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "right",
  },
  listContainer: {
    paddingBottom: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 14,
    color: "#111",    
    textAlign: "right",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
    removeButton: {
    position: "absolute",
    top: 55,
    left: 235,
  },
});