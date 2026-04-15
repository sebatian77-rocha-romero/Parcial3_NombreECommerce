
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../screens/ThemeContext";


import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritosScreen from "../screens/favoritos";
import AjustesScreen from "../screens/ajustes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStackNav = createNativeStackNavigator();

function ProfileStack() {
  return (
    <ProfileStackNav.Navigator>
      <ProfileStackNav.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />

      <ProfileStackNav.Screen 
        name="Ajustes" 
        component={AjustesScreen} 
      />
    </ProfileStackNav.Navigator>
  );
}



function HomeStack({ cart, setCart, Fav, setFav, theme }) {
  
  return (
    <Stack.Navigator
          screenOptions={{
            headerStyle: {
          backgroundColor: theme.colors.card
        },
        headerTintColor: theme.colors.text
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: "Inicio" }} 
      />
      <Stack.Screen
        name="ProductList"
        options={{ title: "Lista de Productos" }}
      >
        {(props) => (
          <ProductListScreen 
            {...props}
            cart={cart}
            setCart={setCart}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ProductDetail"
        options={{ title: "Detalle del producto" }}
      >
        {(props) => (
          <ProductDetailScreen
            {...props}
            cart={cart}
            setCart={setCart}
            Fav={Fav}
            setFav={setFav}
          />
        )}
        
      </Stack.Screen>
      <Stack.Screen
        name="Ajustes"
        component={AjustesScreen}
        options={{ title: "Ajustes" }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { theme } = useContext(ThemeContext);
  const [cart, setCart] = useState([]);
  const [Fav, setFav] = useState([]);
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Carrito') {
              iconName ='cart';
            } else if (route.name === 'Perfil') {
              iconName ='person';
            } else if (route.name === 'Favoritos') { 
              iconName = 'heart';
            } else {
              iconName = 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: theme.colors.card
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: "gray",

          headerStyle: {
            backgroundColor: theme.colors.card
          },
          headerTintColor: theme.colors.text
        })}
      >

        <Tab.Screen name="Inicio">
          {(props) => (
            <HomeStack 
              {...props}
              cart={cart} 
              setCart={setCart}
              Fav={Fav}
              setFav={setFav}
              theme={theme}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Favoritos">
          {(props) => (
            <FavoritosScreen 
              {...props}
              Fav={Fav}
              setFav={setFav}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Carrito">
          {(props) => (
            <CartScreen 
              {...props} 
              cart={cart} 
              setCart={setCart}
            />
          )}
        </Tab.Screen>  

        <Tab.Screen
          name="Perfil"
        >
          {(props) => <ProfileStack {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}