import { createMemoryHistory } from "history";
import { Router } from 'react-router-dom';

import { render, fireEvent, waitFor } from '../config/jest/testing-utils';
import Create from '.';
import * as bookmarksService from '../core/services/bookmarks';
import { MainContext } from '../app';
import { BOOKMARK, TAGS } from '../app/actions';
import { Tag } from '../app/interfaces';

jest.mock('../components/bookmarkForm', () => () => <div data-mock="bookmark-form-page" />);
jest.mock('../components/bookmarkForm', () => ({ onSubmit }: { onSubmit: (url: string, tags: Tag[]) => void }) => (
    <div data-mock="bookmark-form">
        <button data-testid="bookmark-form-submit-button" type="button" onClick={() => onSubmit('https://www.fake-test-url/video', [{ label: 'dolor', value: 'dolor' }])}>
            Submit
      </button>
    </div>
));

describe('src/create', () => {
    const dispatch = jest.fn();
    const state = {
        bookmarks: [],
        tags: [],
    };

    it('should renders create page', () => {
        const { container } = render(<Create />);
        expect(container).toMatchSnapshot();
    });

    it('should submit correctly', async () => {
        const spy = jest.spyOn(bookmarksService, 'create')
            .mockResolvedValueOnce({
                id: 'hihoi8799',
                url: 'https://www.fake-test-url/video',
                author: "amelie",
                title: 'The new vimeo player',
                width: 398,
                height: 879,
                duration: 76,
                tags: [{ label: 'lorem', value: 'lorem' }, { label: 'dolor', value: 'dolor' }],
                createdDate: new Date('2020-10-15T12:00:00.000Z')
            });

        const history = createMemoryHistory();
        history.push('/add')

        const { getByTestId } = render(
            <MainContext.Provider value={{ state, dispatch }}>
                <Router history={history}>
                    <Create />
                </Router>
            </MainContext.Provider>
        );

        const submitButton = getByTestId('bookmark-form-submit-button');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith({ url: 'https://www.fake-test-url/video' });

            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch.mock.calls[0][0]).toEqual({
                type: BOOKMARK.CREATE,
                bookmark: {
                    id: 'hihoi8799',
                    url: 'https://www.fake-test-url/video',
                    author: "amelie",
                    title: 'The new vimeo player',
                    width: 398,
                    height: 879,
                    duration: 76,
                    tags: [{ label: 'lorem', value: 'lorem' }, { label: 'dolor', value: 'dolor' }],
                    createdDate: new Date('2020-10-15T12:00:00.000Z')
                },
                tags: [{ label: 'dolor', value: 'dolor' }],
            });
            expect(dispatch.mock.calls[1][0]).toEqual({
                type: TAGS.CREATE,
                tags: [{ label: 'dolor', value: 'dolor' }],
            });

            expect(history.location.pathname).toBe('/');
        })
    });

});
