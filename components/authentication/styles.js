import styled from 'styled-components/native';

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  /* color: ${({ theme }) => theme.red}; */
  font-size: 24px;
  margin-bottom: 20px;
  /* border-bottom-color: ${({ theme }) => theme.red}; */
`;

export const AuthTextInput = styled.TextInput`
  margin-top: 20px;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: green;
  margin-top: 30px;
  border-radius: 50px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  /* color: ${({ theme }) => theme.red}; */
  margin-top: 15px;
  border-bottom-width: 1px;
`;
