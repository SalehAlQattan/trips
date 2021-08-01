//library imports
import React from "react";
import { List } from "native-base";
//styles
import { DisplayProfile, TripImage, TripTitle, TripWrpa } from "./styles";
import { TouchableOpacity } from "react-native";

const TripItem = ({ item, navigation }) => {
  return (
    <List.Item>
      <TouchableOpacity onPress={() => navigation.navigate("Profile", { item: item })}>
        <DisplayProfile source={{ uri: item.profile }} />
      </TouchableOpacity>
      <TripWrpa onPress={() => navigation.navigate('Detail', { item: item })}>
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripWrpa>
    </List.Item>
  );
};

export default TripItem;
