import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MainContext } from '../app';
import { createBookmark, createTags } from '../app/actions';
import { Tag } from '../app/interfaces';
import BookmarkForm from '../components/bookmarkForm';
import { PreviousButton } from '../components/buttons';
import { Container } from '../components/container';
import { Title } from '../components/title';
import * as bookmarksService from '../core/services/bookmarks';

export const Create = () => {
  const { dispatch } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const handleSubmit = async (url: string, tags: Tag[]) => {
    try {
      setIsLoading(true);

      const data = await bookmarksService.create({ url });
      dispatch(createBookmark(data, tags));
      dispatch(createTags(tags));
      setIsLoading(false);
      history.push('/');
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Ajouter un lien en favoris</Title>
      <PreviousButton onClick={() => history.goBack()}>
        Revenir sur la page précédente
      </PreviousButton>
      <BookmarkForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
};

export default Create;
