import { RouteProp } from "@react-navigation/native";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Image } from "expo-image";
import CustomListMeal from "../components/UI/CustomListMeal";
import { MEALS_DUMMY } from "../data/dummydata";

type RootStackParamList = {
  Details: {
    // Define la estructura de los parámetros de ruta
    mealId: string;
    // Agrega más parámetros según tus necesidades
  };
};

type MealsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type Props = {
  route: MealsScreenRouteProp;
};
const MealsDetailsScreen: React.FC<Props> = ({ route }) => {
  const mealId = route.params.mealId;
  const mealSelected = MEALS_DUMMY.find((meal) => meal.id === mealId);

  if (!mealSelected) {
    return (
      <View>
        <Text>Meal Error</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.mealDetailContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={mealSelected.image}
          contentFit="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{mealSelected.tiitle}</Text>
      <View>
        <CustomListMeal list={mealSelected.steps} title="Ingredientes" />
        <CustomListMeal list={mealSelected.steps} title="Pasos" />
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  mealDetailContainer: {
    marginBottom: 64,
  },

  imageContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 16,
  },
});
