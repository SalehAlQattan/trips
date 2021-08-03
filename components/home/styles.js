import styled from "styled-components";

//home page background
export const HomeBgImage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;
export const HomeContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 350px;
`;
export const HomeSigninButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.red};
  margin-top: 50px;
  border-radius: 50px;
  margin-left: 20px;
  width: 200px;
`;
export const HomeSigninButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const TextOther = styled.Text`
  color: ${({ theme }) => theme.white};
  margin-top: 15px;
  border-bottom-width: 1px;
  padding-right: 80px;
  padding-left: 90px;
  font-size: 18px;
  align-self: center;
  align-items: center;
`;
