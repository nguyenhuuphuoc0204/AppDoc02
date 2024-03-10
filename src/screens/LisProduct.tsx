import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import GiCungDuoc from "../component/GiCungDuoc";

const ListProduct = () => {
  return (
    <>
      <GiCungDuoc title="Sản Phẩm" />
      <ScrollView contentContainerStyle={styles.container}>
        {[1, 2, 3, 4].map((index) => (
          <View key={index} style={styles.item}>
            <Image
              source={require("../assets/giatri1.jpg")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Ngaau</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  item: {
    width: "45%",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color:'White',

  },
  dess:{
    backgroundColor:'black',
    paddingVertical: 8
  }
});

export default ListProduct;
