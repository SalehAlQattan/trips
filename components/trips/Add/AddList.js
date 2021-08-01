//library imports
import React, { useState } from "react";
import { observer } from "mobx-react";
//stores
import tripStore from "../../../stores/tripStore";
//styles
import {
  AddTextInput,
  AddContainer,
  AddTitle,
  ConfirmAddButton,
  ConfirmAddButtonText,
} from "../styles";

const AddList = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => tripStore.createTrips(trip, navigation);

  return (
    <AddContainer>
      <AddTitle>Add a Trip!</AddTitle>
      <AddTextInput
        allowNull={false}
        placeholder="Title"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <AddTextInput
        placeholder="Description"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        multiline={true}
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <AddTextInput
        placeholder="Image"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />
      <ConfirmAddButton onPress={handleSubmit}>
        <ConfirmAddButtonText>Confirm</ConfirmAddButtonText>
      </ConfirmAddButton>
    </AddContainer>
  );
};

export default observer(AddList);
