import styled, { css } from 'styled-components';

export const PaginationList = styled.ul`
    padding: 0;
    list-style: none;
    margin: 3.2rem auto 1.6rem;
`;

export const PaginationItem = styled.li`
     display: inline-block;   
`;

export const PaginationButton = styled.button<{ active: boolean }>`
    background-color: transparent;
    border: none;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;

    ${props => props.active && css`
        background-color: ${props => props.theme.colors.PRIMARY_COLOR};
        color: #fff;
    `};
`;

export const BookmarkList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (min-width: ${props => props.theme.breakpoints.X_SMALL}) and (max-width: ${props => props.theme.breakpoints.MEDIUM}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.X_SMALL}) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.XX_SMALL}) {
        grid-gap: 1.6rem;
    }
`;

export const BookmarkItem = styled.li`
    background-color: #fff;
    padding: 1.6rem;
    border-radius: ${props => props.theme.RADIUS};
    box-shadow: ${props => props.theme.BOX_SHADOW};
    display: flex;
    flex-direction: column;
`;

export const BookmarkLink = styled.a`
    text-decoration: none;
    display: inline-block;
    width: 100%;
    flex: 1 1 auto;
`;

export const BookmarkInfo = styled.p`
    margin: 0.8rem 0 0;
`;

export const BookmarkItemTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0.4rem;
    font-size: ${props => props.theme.text.FONT_SIZE_LARGE};
    font-weight: 400;
`;

export const BookmarkDate = styled.p`
    font-size: ${props => props.theme.text.FONT_SIZE_SMALL};
    color: ${props => props.theme.colors.GREY_ULTRA_DARK};
    margin: 0;
`;

export const TagsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 0.8rem;
`;

export const TagsItem = styled.li`
    background-color: ${props => props.theme.colors.SECONDARY_COLOR};
    padding: 0 0.8rem;
    font-size: ${props => props.theme.text.FONT_SIZE_SMALL};
    border-radius: ${props => props.theme.RADIUS};
    display: inline-block;
    word-break: keep-all;
    margin-right: 0.8rem;
    color: #fff;
`;

export const BookmarkActions = styled.div`
    border-top: 1px dashed ${props => props.theme.colors.GREY_MEDIUM};
    padding-top: 1.6rem;
    margin-top: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EmptyListContainer = styled.div`
    display: flex;
    margin: auto;
`;

export const EmptyListText = styled.p`
    color: ${props => props.theme.colors.GREY_DARK};
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${props => props.theme.breakpoints.X_SMALL}) {
        flex-direction: column;
        margin-bottom: 1.6rem;
    }
`;