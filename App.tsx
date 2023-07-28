import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScree";

type RootStackParamList = {
  Meals: {
    mealId: string;
  };
  Categories: {};
  // Puedes agregar más rutas aquí según tus necesidades
};

const Stack = createStackNavigator<RootStackParamList>();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerTitle: "Categorias" }}
      />
      <Stack.Screen name="Meals" component={MealsScreen} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />  */}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
