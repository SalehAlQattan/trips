//library imports
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "native-base";
import * as DocumentPicker from "expo-document-picker";
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
  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      }).then((response) => {
        if (response.type == "success") {
          let { name, size, uri } = response;
          let nameParts = name.split(".");
          let fileType = nameParts[nameParts.length - 1];
          var fileToUpload = {
            name: name,
            size: size,
            uri: uri,

            type: "application/" + fileType,
          };
          setDoc(fileToUpload);
          setTrip({ ...trip, image: fileToUpload });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = () => tripStore.createTrip(trip, navigation);

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
      <Button onPress={pickDocument}>Add your image</Button>
      <ConfirmAddButton onPress={handleSubmit}>
        <ConfirmAddButtonText>Confirm</ConfirmAddButtonText>
      </ConfirmAddButton>
    </AddContainer>
  );
};

export default observer(AddList);
