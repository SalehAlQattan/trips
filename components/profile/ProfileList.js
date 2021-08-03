//library imports
import React from "react";
import { ScrollView, Spinner, List } from "native-base";
import { observer } from "mobx-react";
//components
import ProfileItem from "./ProfileItem";
import ProfileTrip from "./ProfileTrip";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const ProfileList = ({ route, navigation }) => {
  if (authStore.loading) <Spinner />;
  const { item } = route.params;
  /* find the user profile */
  const userList = profileStore.profiles
    .filter((user) => user.userId === authStore.user?.id)
    .map((user) => user.user)
    .map((user) => (
      <ProfileItem
        user={user}
        key={user.username}
        navigation={navigation}
        item={item.userId}
      />
    ));
  /* find all trips */
  const findTrips = tripStore.trips
    .filter((trip) => trip.userId === item.userId)
    .map((trip) => (
      <ProfileTrip item={trip} key={trip.id} navigation={navigation} />
    ));
  return (
    <>
      {userList}
      <ScrollView>
        <List>{findTrips}</List>
      </ScrollView>
    </>
  );
};

export default observer(ProfileList);
