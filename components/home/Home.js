//library imports
import React from "react";
import { SafeAreaView, Alert, Text } from "react-native";
import { observer } from "mobx-react";
//stores
import authStore from "../../stores/authStore";
//styles
import {
  HomeBgImage,
  HomeContainer,
  HomeSigninButton,
  HomeSigninButtonText,
  TextOther,
} from "./styles";

const Home = ({ navigation }) => {
  const handleSignout = () => {
    authStore.signout();
    Alert.alert("Signout Successfully", "Signin Again ?", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Signin", onPress: () => navigation.navigate("Signin") },
    ]);
  };

  return (
    <HomeBgImage source={require("../../assets/bgHome.jpg")}>
      <HomeContainer>
        <SafeAreaView>
          <HomeSigninButton onPress={() => navigation.navigate("Signin")}>
            <HomeSigninButtonText>Sign in</HomeSigninButtonText>
          </HomeSigninButton>
          <TextOther onPress={() => navigation.navigate("Signup")}>
            Sign up ?
          </TextOther>
          <TextOther onPress={() => navigation.navigate("Explore")}>
            Guest
          </TextOther>
          {authStore.user ? (
            <TextOther onPress={handleSignout}>Sign out</TextOther>
          ) : null}
        </SafeAreaView>
      </HomeContainer>
    </HomeBgImage>
  );
};

export default observer(Home);