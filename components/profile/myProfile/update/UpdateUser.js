//library imports
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "native-base";
import { Image, TouchableOpacity, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";
//stores
import profileStore from "../../../../stores/profileStore";
//styles
import {
  UpdateTextInput,
  UpdateContainer,
  UpdateImage,
  TextInfo,
  BioTextInput,
} from "../../styles";

const UpdateUser = ({ route, navigation }) => {
  const { user } = route.params;
  const { checkId } = route.params;
  const [profile, setProfile] = useState({
    bio: user.bio,
    image: { uri: user.image ? user.image : "" },
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
          setProfile({ ...profile, image: fileToUpload });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    /* update the user */
    profileStore.updateItem(profile, checkId);
    navigation.goBack();
  };
  return (
    <UpdateContainer>
      <TouchableOpacity onPress={pickDocument}>
        <UpdateImage source={{ uri: profile.image.uri }} />
      </TouchableOpacity>
      <TextInfo>Click on the image to Update</TextInfo>
      <BioTextInput
        placeholder="Type in your Bio ... "
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        value={profile.bio}
      />

      <Button onPress={handleUpdate}>Update</Button>
    </UpdateContainer>
  );
};

export default observer(UpdateUser);
