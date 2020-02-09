import styled from 'styled-components';
import {StyleConstants} from '../../shared/constants';

const { colors, dimensions } = StyleConstants

export const CardContainer = styled.div`
    
    margin: 15px;
    .name {
        margin: 0 0 5px 10px;
        /* padding: 0 10px 10px 0; */
        font-size: ${dimensions.fontSizeH2}
    }
`

export const Card = styled.div`
    padding: 15px;
    border-bottom: 3px solid #2D3035;
    border-left: 5px solid ${colors.orangeAccent};
    border-radius: ${dimensions.cardBorderRadius};
`;

export const UpperRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    `

export const MiddleRow = styled.div`
    display: flex;
    margin: 0 0 10px 15px;
    justify-content: space-between;
    align-items: center;
    `

export const BottomRow = styled.div`
    display: flex;
    margin: 0 0 5px 15px;
    justify-content: space-between;
    align-items: center;
`

export const StyledButton = styled.div`
    padding: 0 5px 5px;
    margin: 0 0 10px;
    border-bottom: 3px solid #2D3035;
    color: ${colors.orangeAccent};
`;

export const ExpandButton = styled.div`
    background: ${colors.cardBackgroundLight };
    color: ${props => props.visible ? colors.orangeAccent : colors.primaryTextColor};
    padding: 5px;
    height: 16px;
    width: 16px;
    text-align: center;
    font-weight: 700;
    border-radius: 50px;
    transition: 0.6s;
    transform: ${props => props.visible ? "rotate(180deg)" : "rotate(0deg)"};
`;