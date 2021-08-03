//library imports
import React from "react";
import { List } from "native-base";
import { observer } from "mobx-react";
import { Text } from "react-native";
//styles
import { TripImage, TripTitle, TripContainer } from "./styles";
const ProfileTrip = ({ item, navigation }) => {
  return (
    /* will add the navigation for trips */
    <List.Item>
      <TripContainer
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripContainer>
    </List.Item>
  );
};

export default observer(ProfileTrip);
