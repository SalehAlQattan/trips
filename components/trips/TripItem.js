//library imports
import React from "react";
import { List } from "native-base";
//styles
import { DisplayProfile, TripImage, TripTitle, TripWrpa } from "./styles";

const TripItem = ({ item }) => {
  return (
    <List.Item>
      <DisplayProfile source={{ uri: item.profile }} />
      <TripWrpa>
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripWrpa>
    </List.Item>
  );
};

export default TripItem;
