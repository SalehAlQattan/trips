//library imports
import React from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert, Image, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
//stores
import authStore from "../../../stores/authStore";
import tripStore from "../../../stores/tripStore";
//styles
import { MainProfileImage } from "../styles";
const UserProfile = () => {
  /* find the trips and user information */
  const items = tripStore.trips
    .filter((item) => item.userId === authStore.user?.id)
    .map((item) => item);

  /* convert array of object to object */
  const item = Object.assign({}, ...items);

const UserProfile = () => {
    /* find the trips and user information */
    const items = tripStore.trips.filter(item => item.userId === authStore.user?.id).map((item) => item);
    /* convert array of object to object */
    const item = Object.assign({}, ...items)
    const handlePress = () => {
        if (authStore.user) navigation.navigate("Profile", { item: item, checkId: authStore.user?.id })
        else {
            Alert.alert(
                "Sign in",
                "Sign in to access checkout",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Signin", onPress: () => navigation.navigate("Signin") }
                ]
            );
        }

    }
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={handlePress}>
      <MainProfileImage source={require("../../../assets/profile2.png")} />
    </TouchableOpacity>
  );
};

export default observer(UserProfile);
