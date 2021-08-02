import { List, Spinner } from "native-base";
import React from "react";
import { observer } from "mobx-react";
import { EditBtn, ProfileImage } from "./styles";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const ProfileItem = ({ user, navigation, item }) => {
    if (profileStore.loading) <Spinner />
    console.log(user)
    return (
        <>
            <List>
                {/* will add image, username, and bio */}
                <List.Item>{user.username}</List.Item>
                <List.Item>{user.bio}</List.Item>
                <ProfileImage source={{ uri: user.image }} />
            </List>
            {/* will check the username to edit the page */}
            {(authStore.user?.username === user.username) && <List>
                <EditBtn name="edit" size={23} onPress={() => navigation.navigate("Edit Profile", { user: user, item: item })} />
            </List>}

        </>
    );
};

export default observer(ProfileItem);