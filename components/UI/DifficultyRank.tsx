import { View, StyleSheet } from "react-native";
import { RankAffordability } from "../../interfaces/meals";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  affordability: RankAffordability;
  color: string;
};
const DifficultyRank: React.FC<Props> = ({ affordability, color }) => {
  return (
    <View style={styles.difficultContainer}>
      <FontAwesome5 name="hamburger" size={20} color="white" />
      <FontAwesome5 name="hamburger" size={20} color="white" />
      <FontAwesome5 name="hamburger" size={20} color="white" />
      <FontAwesome5 name="hamburger" size={20} color="white" />
      <FontAwesome5 name="hamburger" size={20} color="white" />
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
