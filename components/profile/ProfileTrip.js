import { List } from "native-base";
import React from "react";
import { observer } from "mobx-react";


const ProfileTrip = ({ trip }) => {
    return (
        /* will add the navigation for trips */
        <List>
            <List.Item>{trip.title}</List.Item>
        </List>
    );
};

export default observer(ProfileTrip);