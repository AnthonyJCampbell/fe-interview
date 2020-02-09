import styled from 'styled-components';
import {StyleConstants} from '../../shared/constants';

const { colors, dimensions } = StyleConstants

export const List = styled.div`
    background: ${colors.cardBackgroundLightLinear};
    width: 100%;
    display: ${props => props.visible ? "inline" : "none" };
    transition: 1s;
`;

export const ListItem = styled.div`
    background: ${colors.cardBackgroundLightLinear};
    border-radius: ${dimensions.cardBorderRadius};
    margin: 8px 10% 8px 10%;
    padding: 3px 10px 3px 10px;
    width: 80%;
    display: flex;
    justify-content: space-between;
`