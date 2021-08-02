//library imports
import React from "react";
import { List } from "native-base";
//styles
import { DisplayProfile, TripImage, TripTitle, TripWrpa } from "./styles";
import { TouchableOpacity } from "react-native";

import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";


const TripItem = ({ item, navigation }) => {
  const userIamge = profileStore.profiles
    .filter((user) => user.userId === item.userId)
    .map((user) => user.user)
    .map((user) => user.image).toString();
  return (
    <List.Item>
      <TouchableOpacity onPress={() => navigation.navigate("Profile", { item: item })}>
        <DisplayProfile source={{ uri: userIamge }} />
      </TouchableOpacity>
      <TripWrpa onPress={() => navigation.navigate('Detail', { item: item })}>
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripWrpa>
    </List.Item>
  );
};

export default observer(TripItem);
