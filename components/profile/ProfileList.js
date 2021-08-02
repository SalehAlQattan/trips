import React from "react";
import { Button, Spinner, Text } from "native-base";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

import { observer } from "mobx-react";
import ProfileItem from "./ProfileItem";
import ProfileTrip from "./ProfileTrip";

const ProfileList = ({ route, navigation }) => {

    if (authStore.loading) <Spinner />
    const { item } = route.params;
    /* find the user profile */
    const userList = profileStore.profiles
        .filter((user) => user.userId === authStore.user?.id)
        .map((user) => user.user)
        .map((user) => <ProfileItem user={user} key={user.username} navigation={navigation} item={item.userId} />);
    console.log(userList)
    /* find all trips */
    const findTrips = tripStore.trips
        .filter((trip) => trip.userId === item.userId)
        .map((trip) => <ProfileTrip trip={trip} key={trip.id} />);
    return (
        <>
            {userList}
            {findTrips}
        </>
    );
};

export default observer(ProfileList);