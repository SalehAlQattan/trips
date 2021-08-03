import React, { useState } from 'react';
import { UpdateTextInput } from '../../styles';

import { observer } from 'mobx-react';
import { Button } from 'native-base';
import profileStore from '../../../../stores/profileStore';


const UpdateUser = ({ route, navigation }) => {
    const { user } = route.params;
    const { checkId } = route.params;
    const [profile, setProfile] = useState({
        bio: user.bio,
        // title: item.title,
        // description: item.description ? item.description : '',
        // image: item.image ? item.image : '',
    });
    const handleUpdate = () => {
        /* update the user */
        profileStore.updateItem(profile, checkId)
        navigation.replace("Explore")
    }
    return (
        <>
            <UpdateTextInput
                placeholder="Type your Bio ... "
                placeholderTextColor="#949499"
                autoCapitalize="none"
                onChangeText={(bio) => setProfile({ ...profile, bio })}
                value={profile.bio}
            />
            <Button onPress={handleUpdate}>Update</Button>
        </>
    );
};

export default observer(UpdateUser);