//library imports
import React from "react";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
//components
import TripItem from "./TripItem";
import AddButton from "./Add/AddButton";
//stores
import tripStore from "../../stores/tripStore";
import { ScrollView } from "react-native";
import authStore from "../../stores/authStore";
//styles
import { BGC, FloatingAdd, ListItemContainer } from "./styles";

const TripsList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const triplist = tripStore.trips
    .filter((item) => item.userId !== authStore.user?.id)
    .map((item) => (
      <TripItem item={item} key={item.id} navigation={navigation} />
    ));

  return (
    <BGC>
      <ScrollView>
        <ListItemContainer>{triplist}</ListItemContainer>
      </ScrollView>
      {authStore.user && (
        <FloatingAdd>
          <AddButton />
        </FloatingAdd>
      )}
    </BGC>
  );
};

export default observer(TripsList);
