import styled from 'styled-components';
import { StyleConstants } from './shared/constants';

const { colors, dimensions } = StyleConstants

export const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TabsContainer = styled.div`
  width: 70%;
  min-width: 400px;
  padding: 20px;
  margin: 10vh auto 5vh auto;

  background: ${colors.cardBackgroundLight};
  background: ${colors.cardBackgroundLightLinear};
  border-radius: ${dimensions.cardBorderRadius};
  
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    width: 90%;
    min-width: 300px;
  }
`

export const Button = styled.div`
  background: ${colors.buttonColor};
  border-bottom: ${props => props.active ? `3px solid ${colors.orangeAccent}` : `3px solid #40434A `};
  width: 140px;
  padding: 10px;
  margin: 10px;
  border-radius: ${dimensions.cardBorderRadius};
  font-size: ${dimensions.fontSizeP};
  text-align: center;
  transition: .5s;
`