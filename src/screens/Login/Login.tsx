import React from "react";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton,
  Input,
} from "./styles";
import { SafeAreaView, Text, TextInput } from "react-native";
import Button from "../../../src/components/Button";
import { ThemeProvider } from "styled-components";
import COLORS from "../../styles/theme";

const Login = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Welcome back {"\n"} to Mabank Wallet</Title>
          <Description>Sign up with</Description>
          <ViewButton>
            <ThemeProvider theme={COLORS}>
              <Button
                images="google_1"
                widthI={40}
                heightI={40}
                color={COLORS.COLORS.GRAY_100}
                backgroundColor="#fff"
                onPress={() => alert("¡Presionaste el botón Google!")}
                title="Google"
              />
              <Button
                images="facebook_4"
                widthI={30}
                heightI={30}
                color={COLORS.COLORS.WHITE}
                backgroundColor={COLORS.COLORS.BLUE}
                onPress={() => alert("¡Presionaste el botón Facebook!")}
                title="Facebook"
              />
            </ThemeProvider>
          </ViewButton>
        </ContentHeader>
        <ContentBody>
          <Input>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
          </Input>
        </ContentBody>
        <ContentFooter>
          <ViewButton>
            <Text>Login</Text>
          </ViewButton>
          <Description>Don't have on account get?</Description>
          <Description> Register </Description>
        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
