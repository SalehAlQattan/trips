//library imports
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
//components
import TripItem from "./TripItem";
import AddButton from "./Add/AddButton";
//stores
import tripStore from "../../stores/tripStore";
import { ScrollView } from "react-native";
import authStore from "../../stores/authStore";

const TripsList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  /* only show other trips */
  console.log(tripStore.trips)
  const triplist = tripStore.trips.map((item) => (
    <TripItem item={item} key={item.id} navigation={navigation} />
  ));

  return (
    <ScrollView>
      {authStore.user && <AddButton />}
      <List>{triplist}</List>
    </ScrollView>
  );
};

export default observer(TripsList);
