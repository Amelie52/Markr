import { useContext, useState } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { BookmarkItem, BookmarkList, BookmarkLink, BookmarkActions, BookmarkItemTitle, BookmarkDate, BookmarkInfo, EmptyListContainer, EmptyListText, TitleContainer, TagsList, TagsItem, PaginationItem, PaginationList, PaginationButton } from "./styledComponents";
import { MainContext } from "../app";
import Date from "../components/date";
import { deleteBookmark } from "../app/actions";
import { Button, ButtonLink } from "../components/buttons";
import { Title } from "../components/title";
import { Container } from "../components/container";

dayjs.extend(duration)

const formatDuration = (ms: number) => {
    const seconds = dayjs.duration(ms).seconds()
    const minutes = dayjs.duration(ms).minutes()
    const hours = Math.floor(dayjs.duration(ms).asHours())

    if (hours > 0) {
        return `${hours}h${minutes}min`
    } else if (minutes > 0) {
        return `${minutes}min${seconds}s`
    } else {
        return `${seconds}s`
    }
}

export const Home = () => {
    const { state, dispatch } = useContext(MainContext);
    const [firstArrayElement, setFirstArrayElement] = useState(0);
    const [activePage, setActivePage] = useState(0);
    // number of bookmarks by page
    const pageSize = 3;

    const handleClick = (bookmarkId: string) => {
        dispatch(deleteBookmark(bookmarkId));
    }

    const pages = Math.ceil(state.bookmarks.length / pageSize);

    const getPaginationItems = () => {
        let paginationItems = [];

        for (let i = 0; i < pages; i++) {
            paginationItems.push(
                <PaginationItem key={`pagination-page-${i + 1}`}>
                    <PaginationButton
                        active={activePage === i}
                        onClick={() => {
                            setFirstArrayElement(i * pageSize);
                            setActivePage(i);
                        }}
                        aria-label={activePage === i ? `page ${i + 1} (page active)` : `page ${i + 1}`}
                    >
                        {i + 1}
                    </PaginationButton>
                </PaginationItem>);
        }

        return paginationItems;
    }

    return (
        <Container>
            <TitleContainer>
                <Title>Ma liste de favoris</Title>
                <ButtonLink to='/add'>Ajouter un lien en favoris</ButtonLink>
            </TitleContainer>
            {state.bookmarks.length > 0 ? (
                <>
                    {pages > 1 && (
                        <PaginationList>
                            {getPaginationItems()}
                        </PaginationList>
                    )}
                    <BookmarkList>
                        {state.bookmarks.slice(firstArrayElement, firstArrayElement + pageSize).map(bookmark => {
                            return (
                                <BookmarkItem key={bookmark.id}>
                                    <BookmarkLink href={bookmark.url} target="_blank" rel="noreferrer noopener">
                                        <BookmarkItemTitle>{bookmark.title}</BookmarkItemTitle>
                                        <BookmarkDate>Ajouté le <Date date={bookmark.createdDate} /></BookmarkDate>
                                        {bookmark.tags.length > 0 && (
                                            <TagsList>
                                                {bookmark.tags.map(tag => <TagsItem key={tag.value}>{tag.value}</TagsItem>)}
                                            </TagsList>
                                        )}
                                        {bookmark.author && <BookmarkInfo>Auteur : {bookmark.author}</BookmarkInfo>}
                                        {bookmark.duration && <BookmarkInfo>Durée : {formatDuration(bookmark.duration * 1000)}</BookmarkInfo>}
                                    </BookmarkLink>
                                    <BookmarkActions>
                                        <ButtonLink to={`/edit/${bookmark.id}`}>Modifier</ButtonLink>
                                        <Button onClick={() => handleClick(bookmark.id)} secondary>Supprimer</Button>
                                    </BookmarkActions>
                                </BookmarkItem>
                            )
                        })}
                    </BookmarkList>
                </>
            ) : (
                <EmptyListContainer>
                    <EmptyListText>Aucun favoris</EmptyListText>
                </EmptyListContainer>
            )}
        </Container>
    );
};

export default Home;