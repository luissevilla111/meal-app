import { View, StyleSheet, Text } from "react-native";

type Props = {
  list: string[];
  title: string;
};

const CustomListMeal: React.FC<Props> = ({ list, title }) => {
  return (
    <View style={styles.listContainerFather}>
      <View style={styles.listContainerChild}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.divisiorLine}></View>
        {list.map((element) => {
          return (
            <View id={element} style={styles.elementContainer}>
              <Text style={styles.itemList}> {element}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CustomListMeal;

const styles = StyleSheet.create({
  listContainerFather: {
    marginTop: 16,
  },
  listContainerChild: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  divisiorLine: {
    minHeight: 5,
    backgroundColor: "#fff",
    /* color: "#fff", */
    width: "100%",
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 16,
  },

  elementContainer: {
    marginTop: 16,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor:'#26242e'
  },

  itemList: {
    color: "white",
    textAlign: "center",
    fontSize:16
  },
});
