import styled from 'styled-components';
import { StyleConstants } from '../../shared/constants';

const { colors } = StyleConstants

export const StyledTab = styled.div`
    width: 50%;
    min-width: 360px;
    max-width: 440px;

    margin: -50px auto 0;
    padding: 20px;
    background: ${colors.cardBackgroundDark};
    border-radius: 12.5px;

    @media (max-width: 500px) {
        width: 80%;
        min-width: 300px;
    }
`