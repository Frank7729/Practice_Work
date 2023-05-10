import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Container } from "./styles";

const Button = ({
  onPress,
  backgroundColor,
  title,
  color,
  widthI,
  heightI,
  images,
}) => {
  console.log(`Ruta de la imagen: ../assets/img_${images}.png`);
  return (
    <Container>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 150,
          height: 40,
          flexDirection: "row",
          backgroundColor: backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          position: "relative",
        }}
      >
        <Image
          source={{ uri: "../assets/img_" + images + ".png" }}
          style={{
            width: widthI,
            height: heightI,
            resizeMode: "contain",
          }}
        />

        <Text style={{ textAlign: "center", fontSize: 15, color: color }}>
          {title}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
