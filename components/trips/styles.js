import styled from "styled-components/native";

import { List } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

/* Wrapper */
export const TripWrpa = styled.TouchableOpacity`
    display: flex;
    margin: auto
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
    margin: auto
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
    color: red
`;
/* Edit Button */
export const EditBtn = styled(Feather)`
    color: #0dcaf0
`;
/* End Details Trip */
