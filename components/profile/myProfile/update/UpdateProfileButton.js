//library imports
import React from "react";
import { useNavigation } from "@react-navigation/native";
//stores
import authStore from "../../../../stores/authStore";
//styles
import { EditBtn } from "../../styles";
const UpdateProfileButton = ({ user, item }) => {
  const navigation = useNavigation();
  return (
    <EditBtn
      name="edit"
      size={23}
      onPress={() =>
        navigation.navigate("Edit Profile", {
          user: user,
          item: item,
          checkId: authStore.user?.id,
        })
      }
    />
  );
};

export default UpdateProfileButton;
