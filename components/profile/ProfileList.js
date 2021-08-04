//library imports
import React from "react";
import { ScrollView, Spinner, View } from "native-base";
import { observer } from "mobx-react";

//components
import ProfileItem from "./ProfileItem";
import ProfileTrip from "./ProfileTrip";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
//styles
import { ProfileListStyled, ScrollViewStyled, BGCProfile } from "./styles";
const ProfileList = ({ route, navigation }) => {
  const { checkId } = route.params;
  if (authStore.loading) <Spinner />;
  const { item } = route.params;
  /* find the user profile */
  const userList = checkId
    ? profileStore.profiles
        .filter((user) => user.userId === checkId)
        .map((user) => user)
        .map((user) => (
          <ProfileItem user={user} key={user.id} item={item.userId} />
        ))
    : profileStore.profiles
        .filter((user) => user.userId === item.id)
        .map((user) => user)
        .map((user) => (
          <ProfileItem user={user} key={user.id} item={item.userId} />
        ));
  /* find all trips */
  const findTrips = tripStore.trips
    .filter((trip) => trip.userId === item.userId)
    .map((trip) => (
      <ProfileTrip item={trip} key={trip.id} navigation={navigation} />
    ));
  return (
    <BGCProfile>
      <View>{userList}</View>

      <ScrollViewStyled>
        <ProfileListStyled>{findTrips}</ProfileListStyled>
      </ScrollViewStyled>
    </BGCProfile>
  );
};

export default observer(ProfileList);
