import { View, Text, StyleSheet } from "react-native";
import { IMeal } from "../../interfaces/meals";
import { Image } from "expo-image";
import FavoriteMealIcon from "../UI/FavoriteMealIcon";

type Props = {
  meal: IMeal;
  color: string;
};

const MealsItem: React.FC<Props> = ({ meal, color }) => {
  return (
    <View style={{ ...styles.mealItemContainer }}>
      <View>
        <Image
          source={meal.image}
          style={styles.image}
          contentFit="cover"
        ></Image>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{meal.tiitle}</Text>
        <View style={styles.subDetails}>
          <View style={styles.detailContainer}>
            <Text style={styles.textDetailTag}>Dificultad :</Text>
            <Text style={{ ...styles.textRespo, color: color }}>
              {meal.affordability}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.textDetailTag}>Duracion :</Text>
            <Text style={{ ...styles.textRespo, color: color }}>
              {meal.duration}
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <FavoriteMealIcon isFavorite={meal.isFavorite} />
        </View>
      </View>
    </View>
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
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
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

  iconContainer: {
    borderTopLeftRadius: 32,
    padding: 16,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
});
