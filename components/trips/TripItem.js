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
  const profileSelected = profileStore.profiles
    .find((profile) => profile.userId === item.userId);
  console.log(profileSelected)
  return (
    <ItemList>
      <UserNameText>{profileSelected.user?.username}</UserNameText>
      <ItemView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { item: profileSelected })}
        >
          <DisplayProfile source={{ uri: profileSelected.image }} />
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
