import { useContext } from "react";
import { useHistory, useParams } from "react-router";

import BookmarkForm from "../components/bookmarkForm";
import { MainContext } from "../app";
import { Tag } from "../app/interfaces";
import { createTags, editBookmark } from "../app/actions";
import { Title } from "../components/title";
import { ErrorContainer, BookmarkTitle } from "./styledComponents";
import { PreviousButton } from "../components/buttons";
import { Container } from "../components/container";

interface ParamTypes {
    bookmarkId: string;
}

const Edit = () => {
    let { bookmarkId } = useParams<ParamTypes>();
    const { state, dispatch } = useContext(MainContext);
    let history = useHistory();

    const bookmark = state.bookmarks.find(bookmark => bookmark.id === bookmarkId);

    const handleSubmit = (_url: string, tags: Tag[]) => {
        if (bookmark) {
            dispatch(editBookmark(bookmark.id, tags))
            dispatch(createTags(tags))
            history.push('/');
        }
    }

    if (bookmark) {
        return (
            <Container>
                <Title>Modifier votre favoris</Title>
                <PreviousButton onClick={() => history.goBack()}>Revenir sur la page précédente</PreviousButton>
                <BookmarkTitle>{bookmark.title}</BookmarkTitle>
                <BookmarkForm onSubmit={handleSubmit} tags={bookmark.tags} url={bookmark.url} />
            </Container>
        );
    } else {
        return (
            <ErrorContainer>
                <p>Impossible d'éditer ce favoris.</p>
                <PreviousButton onClick={() => history.goBack()}>Revenir sur la page précédente</PreviousButton>
            </ErrorContainer>
        )
    }

}

export default Edit;