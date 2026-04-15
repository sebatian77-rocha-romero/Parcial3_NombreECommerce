import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({navigation}) {
  const products = [
    {
      id: "1",
      name: "Xbox 360 semi-nuevo",
      price: 2500,
      image: "https://www.mega-red.com.mx/wp-content/uploads/2020/02/IMG_20160215_175215-scaled.jpg",
      descripcion: "consola de videojuegos en buen estado, semi-nueva, con 2 controles y 5 juegos incluidos"
    },
    {
      id: "2",
      name: "sillon usado",
      price: 1200,
      image: "https://http2.mlstatic.com/D_NQ_NP_627604-MLM79144695054_092024-O.webp",
      descripcion: "sillon de buena calidad, usado pero en buen estado"
    },
    {
      id: "3",
      name: "laptop ryzen 5 5500u / usada",
      price: 6000,
      image: "https://http2.mlstatic.com/D_709090-MLM74269905332_022024-O.jpg",
      descripcion: "laptop de buena calidad, usada pero en buen estado, con procesador ryzen 5 5500u, 8gb de ram y 256gb de almacenamiento"
    },
    {
      id: "4",
      name: "chamarra/chaqueta cazadora de hombre",
      price: 320,
      image: "https://d30o7qbghf97ws.cloudfront.net/itemimage/16239157/image/list-954952ed57132205943ddb616db4f6e7.webp   ",
      descripcion: "chamarra de buena calidad, usada pero en buen estado, talla m"
    },
    {
      id: "5",
      name: "reloj inteligente",
      price: 1500,
      image: "https://http2.mlstatic.com/D_627604-MLM79144695054_092024-O.webp",
      descripcion: "reloj inteligente de buena calidad, usada pero en buen estado"
    },
    {
      id: "6",
      name: "auriculares inalámbricos",
      price: 800,
      image: "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/e8b32f0e-2eeb-486f-9def-8032670b4dc1?rule=hw396_70",
      descripcion: "auriculares inalámbricos de buena calidad, usados pero en buen estado"
    },
    {
      id: "7",
      name: "bicicleta de montaña",
      price: 3000,
      image: "https://http2.mlstatic.com/D_886779-MLM102199145517_122025-O.jpg",
      descripcion: "bicicleta de montaña de buena calidad, requiere una nueva cadena"
    },
    {
      id: "8",
      name: "smartphone",
      price: 5000,
      image: "https://lh3.googleusercontent.com/proxy/siEBO3fJ5xFEXwr8uQQZjoKIMhRI05y3zDpCVSFaHiAYXd1gGk-uRAWIb4bz4rjh2tpoXq0SmhZdp27xSCUVrmpuq_5AcgGjHSOwULG_m_Qt8A",
      descripcion: "smartphone de buena calidad, viejo pero en buen estado, con pantalla de 6.5 pulgadas, 4gb de ram y 64gb de almacenamiento"
    },
    {
      id: "9",
      name: "Camiseta ac/dc",
      price: 10000,
      image: "https://i.ebayimg.com/images/g/Y6oAAeSwf7JpxyPj/s-l1200.webp",
      descripcion: "Camiseta de buena calidad, usada pero en buen estado, talla m, edición limitada de ac/dc  "
    },
     {
      id: "10",
      name: "Cuchillo de de combate ka-bar",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0n8o-KCk9bSn_HB_G1ZaDnT8Vq5eRnHYsA&s",
      descripcion: "cuchillo de combate, mas de uns siglo de antiguedad, en buen estado y confiable, con su funda original"
    }

  ];
  
  
  return (
    <LinearGradient
      colors={['#17c57d', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >  
      <Text style={styles.title}>catalogo de productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <ProductCard 
            name = {item.name} 
            price = {item.price} 
            image={item.image}
            descripcion={item.descripcion}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginBottom: 18,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 4, 
  },


  listContainer: {
    paddingBottom: 20,
  }
});