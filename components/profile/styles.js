//library imports
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

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
  width: 400px;
  top: 10px;
  margin-bottom: 20px;
  right: 40px;
  height: 130px;
  border-radius: 10px;
`;
export const TripTitle = styled.Text`
  text-align: center;
  right: 30px;
  bottom: 10px;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 22px;
  font-weight: bold;
  margin-top: 80px;
`;
export const TripContainer = styled.TouchableOpacity`
  display: flex;
  margin: auto;
`;
