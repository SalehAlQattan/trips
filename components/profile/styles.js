import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
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