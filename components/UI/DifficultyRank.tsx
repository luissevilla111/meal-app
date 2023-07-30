import { View, StyleSheet } from "react-native";
import { RankAffordabilityNumber } from "../../interfaces/meals";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  affordability: RankAffordabilityNumber;
  color: string;
};
const DifficultyRank: React.FC<Props> = ({ affordability, color }) => {
  const getColor = (
    affordability: RankAffordabilityNumber,
    position: number
  ) => {
    if (affordability >= position) {
      return "#ffa534";
    }
    return "#fff";
  };

  return (
    <View style={styles.difficultContainer}>
      <FontAwesome5
        name="hamburger"
        size={20}
        color={getColor(affordability, 1)}
      />
      <FontAwesome5
        name="hamburger"
        size={20}
        color={getColor(affordability, 2)}
      />
      <FontAwesome5
        name="hamburger"
        size={20}
        color={getColor(affordability, 3)}
      />
      <FontAwesome5
        name="hamburger"
        size={20}
        color={getColor(affordability, 4)}
      />
      <FontAwesome5
        name="hamburger"
        size={20}
        color={getColor(affordability, 5)}
      />
    </View>
  );
};

export default DifficultyRank;

const styles = StyleSheet.create({
  difficultContainer: {
    width: "100%",
    /*  */
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 5,
  },
});
