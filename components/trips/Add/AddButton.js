//library imports
import React from "react";
import { useNavigation } from "@react-navigation/native";
//stores
import authStore from "../../../stores/authStore";
//styles
import { AddIcon } from "../styles";

const AddButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) {
      navigation.replace("AddList");
    }
  };

  return (
    <>
      <AddIcon name="pluscircle" size={45} onPress={handlePress} />
    </>
  );
};

export default AddButton;
