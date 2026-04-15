import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { ThemeContext } from "../screens/ThemeContext";

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const { theme } = useContext(ThemeContext);
  const totalItems = cart.length;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Mi Carrito</Text>

      <FlatList
        data={cart}
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
                  setCart(prev => prev.filter((_, i) => i !== index));
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
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>Tu carrito está vacío</Text>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* TOTAL */}
      {cart.length > 0 && (
      <View style={styles.totalContainer}>
        <Text style={[styles.total, { color: theme.colors.text }]}>Total: ${total.toFixed(2)}</Text>
        <Text style={[styles.cant, { color: theme.colors.text }]}>Items: {totalItems}</Text>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.colors.primary }]} 
          onPress={() => setCart([])}>
          <Text style={[styles.buttonText, { color: theme.colors.text }]}>vaciar carrito</Text>
        </TouchableOpacity>
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
    marginBottom: 18,
    top: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
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
    width: 100,
    height: 100,
  },
  info: {
    padding: 22,
    right: 12,
    bottom: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  price: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: "600",
  },
  cant: {
    fontSize: 20,
    bottom: 40,
    fontWeight: "600",
    textAlign: "left",
  },
  totalContainer: {
    marginTop: 20,
    padding: 16,
    borderTopWidth: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 14,
    textAlign: "right",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  removeButton: {
    position: "absolute",
    top: 60,
    left: 235,
    height: 30,
    width: 30,
    justifyContent: "center",
  },
});