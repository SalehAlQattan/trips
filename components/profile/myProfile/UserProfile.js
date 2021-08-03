import { Button } from 'native-base';
import React from 'react';
import authStore from '../../../stores/authStore';
import { useNavigation } from "@react-navigation/native";
import tripStore from '../../../stores/tripStore';
import { Alert } from 'react-native';

import { observer } from 'mobx-react';

const UserProfile = () => {
    /* find the trips and user information */
    const items = tripStore.trips.filter(item => item.userId === authStore.user?.id).map((item) => item);
    /* convert array of object to object */
    const item = Object.assign({}, ...items)
    const handlePress = () => {
        if (authStore.user) navigation.navigate("Profile", { item: item, checkId: authStore.user?.id })
        else {
            Alert.alert(
                "Sign in",
                "Sign in to access checkout",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Signin", onPress: () => navigation.navigate("Signin") }
                ]
            );
        }
    }
    const navigation = useNavigation();
    return (
        <>
            <Button onPress={handlePress}>test</Button>
        </>
    );
};

export default observer(UserProfile);