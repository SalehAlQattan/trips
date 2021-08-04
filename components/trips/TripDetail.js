//library imports
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
//styles
import {
  Action,
  DeleteBtn,
  EditBtn,
  TripImageDetail,
  TitleDetail,
  TextTitleDetail,
  TextDescriptionDetail,
  BGCDetail,
  DetailList,
  ViewStyled,
} from "./styles";

const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const { item } = route.params;

  //   update Trip
  const handleUpdate = () => {
    navigation.navigate("UpdateTrip", { item: item });
  };

  // delete Trip
  const handleDelete = () => {
    tripStore.deleteTrip(item.id);
    navigation.goBack();
  };

  return (
    <BGCDetail>
      <ScrollView>
        <DetailList>
          <TripImageDetail source={{ uri: item.image }} />
          <ViewStyled>
            <TitleDetail>
              <TextTitleDetail>{item.title.toUpperCase()}</TextTitleDetail>
            </TitleDetail>
            <List.Item>
              <TextDescriptionDetail>{item.description}</TextDescriptionDetail>
            </List.Item>
            {item.userId === authStore.user?.id && (
              <Action>
                <DeleteBtn
                  name="delete-outline"
                  size={25}
                  onPress={handleDelete}
                />
                <EditBtn name="edit" size={23} onPress={handleUpdate} />
              </Action>
            )}
          </ViewStyled>
        </DetailList>

        {/* Here Will add the action [edit, delete] */}
      </ScrollView>
    </BGCDetail>
  );
};

export default observer(TripDetail);
