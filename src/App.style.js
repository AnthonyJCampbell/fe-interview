import styled from 'styled-components';
import { StyleConstants } from './shared/constants';

const { colors, dimensions } = StyleConstants

export const TabsContainer = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 720px;
  padding: 20px;
  margin: 10vh auto 5vh;

  /* border: 1px solid red; */
  background: ${colors.cardBackgroundLight};
  background: ${colors.cardBackgroundLightLinear};
  border-radius: 12.5px;
  
  display: flex;
  justify-content: center;

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