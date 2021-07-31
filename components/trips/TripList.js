//library imports
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
//components
import TripItem from "./TripItem";
//stores
import tripStore from "../../stores/tripStore";

const TripsList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const triplist = tripStore.trips.map((item) => (
    <TripItem item={item} key={item.id} navigation={navigation} />
  ));

  return <List>{triplist}</List>;
};

export default observer(TripsList);
