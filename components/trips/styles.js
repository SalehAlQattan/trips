import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
/* Wrapper */
export const TripWrpa = styled.View`
  display: flex;
  margin: auto;
`;

/* User Profile Image */
export const DisplayProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

/* Trip Title */
export const TripTitle = styled.Text`
  text-align: center;
  margin: auto;
  font-size: 22px;
  font-weight: bold;
`;

/* Trip Image */
export const TripImage = styled.Image`
  width: 120px;
  height: 100px;
  margin: auto;
`;

/* Add button */
export const AddIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.red};
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
