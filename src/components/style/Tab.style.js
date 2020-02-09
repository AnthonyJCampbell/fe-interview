import styled from 'styled-components';
import { StyleConstants } from '../../shared/constants';

const { colors, dimensions } = StyleConstants

export const StyledTab = styled.div`
    width: 50%;
    min-width: 360px;
    max-width: 440px;

    margin: -50px auto;
    background: ${colors.cardBackgroundDark};
    border-radius: ${dimensions.cardBorderRadius};
`