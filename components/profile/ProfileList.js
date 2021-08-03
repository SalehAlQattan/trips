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

    const { checkId } = route.params;
    if (authStore.loading) <Spinner />
    const { item } = route.params;
    /* find the user profile */
    const userList = checkId ? profileStore.profiles
        .filter((user) => user.userId === checkId)
        .map((user) => user)
        .map((user) => <ProfileItem user={user} key={user.id} navigation={navigation} item={item.userId} />) : profileStore.profiles
            .filter((user) => user.userId === item.id)
            .map((user) => user)
            .map((user) => <ProfileItem user={user} key={user.id} navigation={navigation} item={item.userId} />);
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
