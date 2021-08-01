import React, { useState } from 'react';
import { List, Spinner } from 'native-base';

import tripStore from '../../stores/tripStore';
import authStore from '../../stores/authStore';

import { observer } from 'mobx-react';
import { Action, DeleteBtn, EditBtn } from './styles';

const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const { item } = route.params;

  //   update Trip
  const handleUpdate = () => {
    navigation.navigate('UpdateTrip', { item: item });
  };

  // delete Trip
  const handleDelete = () => {
    tripStore.deleteTrip(item.id);
    navigation.goBack();
  };

  return (
    <>
      <List>
        <List.Item>{item.title}</List.Item>
        <List.Item>{item.description}</List.Item>
      </List>
      {/* Here Will add the action [edit, delete] */}
      {item.userId === authStore.user?.id ? (
        <Action>
          <DeleteBtn name="delete-outline" size={25} onPress={handleDelete} />
          <EditBtn name="edit" size={23} onPress={handleUpdate} />
        </Action>
      ) : null}
    </>
  );
};

export default observer(TripDetail);
