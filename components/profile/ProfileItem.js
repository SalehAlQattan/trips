//library imports\
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
//components
import UpdateProfileButton from "./myProfile/update/UpdateProfileButton";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
//styles
import {
  EditBtn,
  ProfileImage,
  ViewStyled,
  UsernameText,
  BioText,
} from "./styles";

const ProfileItem = ({ user, item }) => {
  if (profileStore.loading) <Spinner />;
  return (
    <>
      {/* will add image, username, and bio */}
      <ProfileImage source={{ uri: user.image }} />
      <ViewStyled>
        <List.Item>
          <UsernameText> {user.user.username}</UsernameText>
        </List.Item>
        <List.Item>
          <BioText>{user.bio}</BioText>
        </List.Item>
        {user.userId === authStore.user?.id && (
          <UpdateProfileButton user={user} item={item} />
        )}
      </ViewStyled>

      {/* will check the username to edit the page */}

      {/* will check the username to edit the page */}
    </>
  );
};

export default observer(ProfileItem);
