import {View, Text, Button, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { useContext } from "react";
import { ThemeContext } from "../screens/ThemeContext";
export default function HomeScreen({ navigation }) { 
  const { theme } = useContext(ThemeContext);

  
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Image 
        source={require("../../assets/logo4.png")} 
        style={styles.logo} 
      />
      
      <Text style={[styles.nombre, { color: theme.colors.text }]}>Second GO</Text>

      <Image
        source={{ uri: "https://www.raeeandalucia.es/sites/default/files/images/modern-stationary-collection-arrangement_1.jpg" }}
        style={styles.banner}
      />

      <Text style={[styles.sectiontitle, { color: theme.colors.text }]}>productos destacados</Text>

      <View style={styles.productsPreview}>
        
        <View>
          <View style={styles.productsCard}>
            <Image
              source={{ uri: "https://www.fab.com.co/images/h0nadbhvm6m4/bae182b1ff9f62d821354e6079921866/c664d08817cf934cb8f99e005821df97/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9zcGFuaXNoX29ubGluZV9hZHNfaXN0b2NrLTExOTYwNjIwMC0xOS5wbmc/1200w-894h/%C2%BFc%C3%B3mo-mantener-el-color-de-la-ropa%3F-%7C-fab.jpg" }}
              style={styles.foto1}
            />
          </View>
          <Text style={[styles.productText, { color: theme.colors.text }]}>ropa</Text>
        </View>

        <View>
          <View style={styles.productsCard}>
            <Image
              source={{ uri: "https://tmt-news.com/wp-content/uploads/2022/04/seguro-de-equipos-electronicos.png" }}
              style={styles.foto2}
            />
          </View>
          <Text style={[styles.productText, { color: theme.colors.text }]}>tecnologia</Text>
        </View>

      </View>

      <Image
        source={{ uri: "https://recora.mx/cdn/shop/files/Untitled_design_2.jpg?v=1728265034" }}
        style={styles.banner2}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.button }]}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>ver catalogo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.button }]}
        onPress={() => navigation.navigate("Carrito")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>ver carrito</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
},

logo: {
  width: 120,
  height: 120,
  alignSelf: "center",
  marginTop: 10,
  resizeMode: "contain",
  borderRadius: 60,
  borderWidth: 7,
  borderColor: "#00ffaa",
},
nombre: {
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "center",
},
banner: {
  width: "90%",
  height: 180,
  alignSelf: "center",
  borderRadius: 12,
  marginTop: 20,
},
banner2: {
  width: "90%",
  height: 180,
  alignSelf: "center",
  borderRadius: 12,
  marginTop: 20,
},
sectiontitle: {
  fontSize: 22,
  fontWeight: "bold",
  marginLeft: 20,
  marginTop: 30,
},
productsPreview: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 20,
},

productsCard: {
  width: 120,
  height: 120,
  backgroundColor:"#fff",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
},
button: {
  backgroundColor: "#000",
  margin: 20,
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
},

buttonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",

},
foto1: {
  width: 100,
  height: 100,
},
foto2: {
  width: 100,
  height: 100,
},
productText: {
  fontSize: 16,
  fontWeight: "bold",
  marginTop: 10,
  textAlign: "center",
},

});