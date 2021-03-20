import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    color: ${props => props.theme.colors.GREY_DARK};
    text-align: center;
`

export const BookmarkTitle = styled.h2`
    margin-bottom: 0;
    font-weight: 400;
`