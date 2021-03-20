import styled from "styled-components";

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    margin-top: 2.4rem;

    > *:not(:first-child) {
        margin-top: 3.2rem;
    }
`

export const LabelText = styled.span`
    font-weight: 600;
    display: block;
    margin-bottom: 0.4rem;
`

export const InputText = styled.input`
    padding: 0.8rem;
    border-radius: ${props => props.theme.RADIUS};
    border: 1px solid ${props => props.theme.colors.GREY_MEDIUM};
    font-size: ${props => props.theme.text.FONT_SIZE_MEDIUM};
    width: 100%;

    :disabled {
        cursor: not-allowed;
    }
`

export const HelpText = styled.p`
    margin: 0 0 1.2rem;
    font-size: ${props => props.theme.text.FONT_SIZE_SMALL};
    color: ${props => props.theme.colors.GREY_ULTRA_DARK};
`

export const ErrorText = styled.span`
    color: ${props => props.theme.colors.SECONDARY_COLOR};
    margin: 0.4rem 0 0;
    display: inline-block;
`