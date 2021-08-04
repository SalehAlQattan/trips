//library imports
import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
import { ScrollView, View } from "react-native";
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
import { MaterialIcons } from '@expo/vector-icons';

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
              <TextTitleDetail>{item.title}</TextTitleDetail>
            </TitleDetail>
            <List.Item>
              <TextDescriptionDetail>{item.description}</TextDescriptionDetail>
            </List.Item>
            {item.favorite &&
              <View style={{ justiftyContent: "center", alignItems: "center", marginTop: 25 }}>
                <MaterialIcons name="favorite" size={40} color="orange" />
              </View>
            }
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
