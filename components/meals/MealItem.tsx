import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IMeal } from "../../interfaces/meals";
import { Image } from "expo-image";
import FavoriteMealIcon from "../UI/FavoriteMealIcon";
import { FontAwesome } from "@expo/vector-icons";
import DifficultyRank from "../UI/DifficultyRank";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  meal: IMeal;
  color: string;
};

const MealsItem: React.FC<Props> = ({ meal, color }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const navigateToMealDetail = () => {
    navigation.navigate("Details", {
      mealId: meal.id,
    });
  };

  return (
    <TouchableOpacity
      style={{ ...styles.mealItemContainer }}
      onPress={navigateToMealDetail}
    >
      <View>
        <Image
          source={meal.image}
          style={styles.image}
          contentFit="cover"
        ></Image>
      </View>
      <View style={styles.details}>
        <Text style={{ ...styles.title, color: color }}>{meal.tiitle}</Text>
        <View style={styles.subDetails}>
          <View style={styles.detailContainer}>
            <Text style={styles.textDetailTag}>Nivel</Text>
            {/* <Text style={{ ...styles.textRespo, color: color }}>
              {meal.affordability}
            </Text> */}
            <DifficultyRank affordability={meal.affordability} color={color} />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.textDetailTag}>Duracion</Text>
            <Text style={styles.textRespo}>{meal.duration} Min</Text>
          </View>
        </View>
        <View style={styles.iconContainerStar}>
          <FavoriteMealIcon isFavorite={meal.isFavorite} />
        </View>
        <View style={styles.iconContainerCalendar}>
          <FontAwesome name="calendar" size={32} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: 400,
    backgroundColor: "#26242e",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    /* paddingLeft: 16, */
    textAlign: "center",
    paddingVertical: 8,
  },

  detailContainer: {
    /* flexDirection: "row", */
    flex: 1,
    rowGap: 8,
    alignItems: "center",
    /* width: "100%", */
    /* borderWidth: 1,
    borderColor: "#ccc", */
  },

  details: {
    flex: 1,
    position: "relative",

    /* backgroundColor: "#ccc", */
  },

  subDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
    width: "100%",
  },
  textDetailTag: {
    fontSize: 16,
    color: "#a6a6a6",
  },
  textRespo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  iconContainerStar: {
    borderTopLeftRadius: 32,
    padding: 16,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
  iconContainerCalendar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopRightRadius: 32,
  },
});
