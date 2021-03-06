import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";
import Swiper from "react-native-swiper";
import Camera from "./components/Camera";

export default function App() {
  return (
    <Container>
      <Content>
        <Swiper loop={false} index={0} showsPagination={false}>
          <View style={{ flex: 1 }}>
            <Camera />
          </View>
          <View style={styles.slideDefault}>
            <Text style={styles.text}>Table</Text>
          </View>
        </Swiper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
