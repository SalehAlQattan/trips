//library imports
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import * as DocumentPicker from "expo-document-picker";
// stores
import tripStore from "../../../stores/tripStore";
// styles
import {
  AddTextInput,
  AddContainer,
  AddTitle,
  ConfirmAddButton,
  ConfirmAddButtonText,
  TextUpdateDetail,
} from "../styles";
import { MaterialIcons } from "@expo/vector-icons";

const UpdateTrip = ({ route, navigation }) => {
  const { item } = route.params;
  const [fav, setFav] = useState(item.favorite);
  const [trip, setTrip] = useState({
    id: item.id,
    title: item.title,
    description: item.description ? item.description : "",
    image: {
      uri: item.image ? item.image : "",
    },
    favorite: item.favorite,
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

  /* handle favorite */
  const handleCheck = () => {
    setFav(!fav);
    setTrip({ ...trip, favorite: !fav });
  };

  const handleSubmit = () => {
    tripStore.updateTrip(trip);
    navigation.replace("Explore");
  };

  return (
    <AddContainer>
      <AddTitle>Update Trip</AddTitle>
      <AddTextInput
        allowNull={false}
        value={trip.title}
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <AddTextInput
        value={trip.description}
        placeholderTextColor="#949499"
        autoCapitalize="none"
        multiline={true}
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <TouchableOpacity onPress={pickDocument}>
        <Image
          source={{ uri: trip.image.uri }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>

      <TextUpdateDetail>Click to Update your image</TextUpdateDetail>
      {/* Favorite button */}
      <TouchableOpacity onPress={handleCheck}>
        {fav ? (
          <MaterialIcons
            name="favorite"
            size={30}
            color="red"
            style={{ marginTop: 10 }}
          />
        ) : (
          <MaterialIcons
            name="favorite-outline"
            size={30}
            color="black"
            style={{ marginTop: 10 }}
          />
        )}
      </TouchableOpacity>

      <ConfirmAddButton onPress={handleSubmit}>
        <ConfirmAddButtonText>Update</ConfirmAddButtonText>
      </ConfirmAddButton>
    </AddContainer>
  );
};

export default observer(UpdateTrip);
