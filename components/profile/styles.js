//library imports
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { List, ScrollView } from "native-base";

export const MainProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  right: 10px;
  bottom: 5px;
`;

/* Edit Button */
export const EditBtn = styled(Feather)`
  color: #0dcaf0;
  text-align: center;
  left: 190px;
  bottom: 175px;
`;

/* update */
export const UpdateTextInput = styled.TextInput`
  margin-top: 20px;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  color: #000;
`;
export const TripImage = styled.Image`
  width: 390px;
  margin-bottom: 20px;
  height: 130px;
  border-radius: 10px;
`;
export const TripTitle = styled.Text`
  text-align: center;

  margin-bottom: 10px;
  color: ${({ theme }) => theme.white};
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;
export const TripContainer = styled.TouchableOpacity`
  display: flex;
  margin: auto;
`;
export const UpdateContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.light};
  padding-right: 60px;
  padding-left: 60px;
`;

export const UpdateImage = styled.Image`
  margin-top: -100px;
  width: 250px;
  height: 250px;
  border-radius: 300px;
`;
export const TextInfo = styled.Text`
  color: ${({ theme }) => theme.fade};
  top: 15px;
`;
export const BioTextInput = styled.TextInput`
  margin-top: 20px;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.white};
`;

export const ProfileImage = styled.Image`
  width: 200px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  height: 200px;
  border-radius: 100px;
`;
export const ViewStyled = styled.View`
  height: 200px;
  width: 100%;
  top: 130px;
  background-color: ${({ theme }) => theme.light};
  position: absolute;
  z-index: -1;
`;
export const UsernameText = styled.Text`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  color: ${({ theme }) => theme.white};
`;
export const BioText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.white};
`;
export const ProfileListStyled = styled(List)`
  border-width: 0px;
`;
export const ScrollViewStyled = styled(ScrollView)`
  margin-top: 110px;
`;
export const ListItemStyled = styled(List.Item)`
  background-color: ${({ theme }) => theme.superLight};
  margin-bottom: 10px;
  border-radius: 20px;
`;
export const BGCProfile = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.random};
`;
