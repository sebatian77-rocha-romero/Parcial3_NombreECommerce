import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { ThemeContext } from "./ThemeContext";

export default function ProductDetailScreen({ route, navigation, cart, setCart, Fav, setFav }) {

  const { name, price, image, descripcion } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>

      <Image source={{ uri: image }} style={styles.image} />

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          const product = { name, price, image };
          const exists = Fav?.find(p => p.name === name);

          if (exists) {
            setFav(Fav.filter(p => p.name !== name));
            setIsFavorite(false);
          } else {
            setFav([...(Fav || []), product]);
            setIsFavorite(true);
          }
        }}
      >
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={30}
          color={isFavorite ? 'red' : theme.colors.text}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
        <Text style={[styles.price, { color: theme.colors.text }]}>
          ${price.toFixed(2)}
        </Text>

        <Text style={[styles.description, { color: theme.colors.text }]}>
          {descripcion}
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => {
            const newProduct = { name, price, image };
            const exists = cart?.find(p => p.name === name);

            if (!exists) {
              setCart([...cart, newProduct]);
              alert("Producto agregado al carrito");
            } else {
              alert("El producto ya está en el carrito");
            }
          }}
        >
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "600",
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    padding: 15,
    borderRadius: 100,
    marginTop: 20,
    alignItems: "center",
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  favoriteButton: {
    position: "absolute",
    bottom: 30,
    right: 25,
    zIndex: 1,
  }
});