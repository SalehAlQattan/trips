import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { List } from "native-base";
/* Wrapper */
export const TripWrpa = styled.TouchableOpacity`
  display: flex;
  margin: auto;
`;

/* User Profile Image */
export const DisplayProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  right: 50px;
`;

/* Trip Title */
export const TripTitle = styled.Text`
  text-align: center;
  right: 30px;
  bottom: 10px;
  color: ${({ theme }) => theme.white};
  font-size: 22px;
  font-weight: bold;
  margin-top: 80px;
`;

/* Trip Image */
export const TripImage = styled.Image`
  width: 400px;
  top: 10px;
  margin-bottom: 20px;
  right: 40px;
  height: 130px;
  border-radius: 10px;
`;

/* Add button */
export const AddIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.red};
`;

export const FloatingAdd = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 360px;
  bottom: 30px;
`;

export const AddContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AddTitle = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.yellow};
`;

export const AddTextInput = styled.TextInput`
  margin-top: 20px;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.white};
`;

export const ConfirmAddButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.red};
  margin-top: 30px;
  border-radius: 50px;
`;

export const ConfirmAddButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

/* Start Details Trip */
/* Wrapper */
export const Action = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;
/* Delete Button */
export const DeleteBtn = styled(MaterialIcons)`
  color: red;
`;
/* Edit Button */
export const EditBtn = styled(Feather)`
  color: #0dcaf0;
`;
/* End Details Trip */
export const BGC = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ItemList = styled(List.Item)`
  background-color: ${({ theme }) => theme.light};
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const ItemView = styled.View`
  bottom: 80px;
  right: 15px;
`;
export const UserNameText = styled.Text`
  left: 75px;
  bottom: 80px;
  color: ${({ theme }) => theme.white};
  font-size: 20px;
`;
export const ListItemContainer = styled(List)`
  border-width: 0px;
`;
