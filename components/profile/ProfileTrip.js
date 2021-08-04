//library imports
import React from "react";
import { List } from "native-base";
import { observer } from "mobx-react";
import { Text } from "react-native";
//styles
import { TripImage, TripTitle, TripContainer, ListItemStyled } from "./styles";
const ProfileTrip = ({ item, navigation }) => {
  return (
    /* will add the navigation for trips */
    <ListItemStyled>
      <TripContainer
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
        <TripTitle>{item.title}</TripTitle>
        <TripImage source={{ uri: item.image }} />
      </TripContainer>
    </ListItemStyled>
  );
};

export default observer(ProfileTrip);
