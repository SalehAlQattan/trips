import React from 'react';
import { Button, Text } from 'native-base';
//import profileStore from '../../stores/profileStore';

const profileDetail = ({ route }) => {
    const { item } = route.params;
    /* find the user profile */
    //const findUser = profileStore.map(item => item.id)
    return (
        <>
            <Button><Text>{item.userId}</Text></Button>
        </>
    );
};

export default profileDetail;