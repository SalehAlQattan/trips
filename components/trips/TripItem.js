//library imports
import React from "react";

import { List } from "native-base";
//styles
import {
  DisplayProfile,
  TripImage,
  TripTitle,
  TripWrpa,
  ItemView,
  ItemList,
  UserNameText,
} from "./styles";
import { TouchableOpacity, Text } from "react-native";

import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";

const TripItem = ({ item, navigation }) => {
  const userImage = profileStore.profiles
    .filter((user) => user.userId === item.userId)
    .map((user) => user.user)
    .map((user) => user);
  const user = Object.assign({}, ...userImage);

  return (
    <ItemList>
      <UserNameText>{user.username}</UserNameText>
      <ItemView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { item: item })}
        >
          <DisplayProfile source={{ uri: user.image }} />
        </TouchableOpacity>
      </ItemView>

      <TripWrpa onPress={() => navigation.navigate("Detail", { item: item })}>
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripWrpa>
    </ItemList>
  );
};

export default observer(TripItem);
