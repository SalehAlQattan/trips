import { List, Spinner } from "native-base";
import React from "react";
import { observer } from "mobx-react";
import { ProfileImage } from "./styles";
import profileStore from "../../stores/profileStore";

const ProfileItem = ({ user }) => {
    if (profileStore.loading) <Spinner />
    return (
        <>
            {/* will add image, username, and bio */}
            <List.Item>{user.username}</List.Item>
            <List.Item>{user.bio}</List.Item>
            <ProfileImage source={{ uri: user.image }} />
        </>
    );
};

export default observer(ProfileItem);