// components
import React, { useState } from 'react';

// stores
import tripStore from '../../../stores/tripStore';

// mobx
import { observer } from 'mobx-react';

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

  const handleSubmit = () => {
    tripStore.updateTrip(trip);
    navigation.replace('Explore');
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
      <AddTextInput
        placeholder="Image"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />
      <ConfirmAddButton onPress={handleSubmit}>
        <ConfirmAddButtonText>Update</ConfirmAddButtonText>
      </ConfirmAddButton>
    </AddContainer>
  );
};

export default observer(UpdateTrip);
