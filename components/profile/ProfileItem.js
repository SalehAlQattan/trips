//library imports\
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
//styles
import { EditBtn, ProfileImage } from "./styles";

const ProfileItem = ({ user, navigation, item }) => {
  if (profileStore.loading) <Spinner />;
  return (
    <>
      <List>
        {/* will add image, username, and bio */}
        <ProfileImage source={{ uri: user.image }} />

        <List.Item>{user.username}</List.Item>
        <List.Item>{user.bio}</List.Item>
        {authStore.user?.username === user.username && (
          <EditBtn
            name="edit"
            size={23}
            onPress={() =>
              navigation.navigate("Edit Profile", { user: user, item: item })
            }
          />
        )}
      </List>
      {/* will check the username to edit the page */}
    </>
  );
};

export default observer(ProfileItem);
