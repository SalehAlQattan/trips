import { List } from 'native-base';
import { View } from "react-native"
import React from 'react';
import { DisplayProfile, TripImage, TripTitle, TripWrpa } from './styles';

const TripItem = ({ item }) => {
    return (
        <List.Item>
            <DisplayProfile source={{ uri: item.profile }} />
            <TripWrpa>
                <TripTitle>{item.title}</TripTitle>
                <TripImage source={{ uri: item.image }} />
            </TripWrpa>
        </List.Item>
    );
};

export default TripItem;