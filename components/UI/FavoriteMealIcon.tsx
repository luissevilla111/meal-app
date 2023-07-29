import { Button, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  isFavorite: boolean;
};
const FavoriteMealIcon: React.FC<Props> = ({ isFavorite }) => {
  return (
    <View>
      {isFavorite && <AntDesign name="star" size={32} color="#ffe234" />}
      {!isFavorite && <AntDesign name="star" size={32} color="black" />}
    </View>
  );
};

export default FavoriteMealIcon;
