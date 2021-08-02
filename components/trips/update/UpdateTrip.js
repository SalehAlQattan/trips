// components
import React, { useState } from 'react';

// native-base
import { Button } from 'native-base';

// stores
import tripStore from '../../../stores/tripStore';

// mobx
import { observer } from 'mobx-react';

// upload image
import * as DocumentPicker from 'expo-document-picker';

// styles
import {
  AddTextInput,
  AddContainer,
  AddTitle,
  ConfirmAddButton,
  ConfirmAddButtonText,
} from '../styles';

const UpdateTrip = ({ route, navigation }) => {
  const { item } = route.params;

  const [trip, setTrip] = useState({
    id: item.id,
    title: item.title,
    description: item.description ? item.description : '',
    image: item.image ? item.image : '',
  });

  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      }).then((response) => {
        if (response.type == 'success') {
          let { name, size, uri } = response;
          let nameParts = name.split('.');
          let fileType = nameParts[nameParts.length - 1];
          var fileToUpload = {
            name: name,
            size: size,
            uri: uri,
            type: 'application/' + fileType,
          };
          setDoc(fileToUpload);
          setTrip({ ...trip, image: fileToUpload });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    tripStore.updateTrip(trip);
    console.log(trip);
    navigation.navigate('Explore');
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
      <Button onPress={pickDocument}>Update your image</Button>
      <ConfirmAddButton onPress={handleSubmit}>
        <ConfirmAddButtonText>Update</ConfirmAddButtonText>
      </ConfirmAddButton>
    </AddContainer>
  );
};

export default observer(UpdateTrip);
