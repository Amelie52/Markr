import { mainReducer } from './reducer';

import {
  BOOKMARK,
  CreateBookmarkAction,
  CreateTagsAction,
  DeleteBookmarkAction,
  EditBookmarkAction,
  TAGS,
} from './actions';

describe('app/reducer', () => {
  const initialState = {
    bookmarks: [
      {
        id: 'fjirzjr89798789',
        url: 'http://www.flickr.com/photos/onement/1239189689/',
        author: 'amelie',
        title: 'The new image',
        width: 897,
        height: 866,
        tags: [],
        createdDate: new Date('2020-10-15T11:00:00.000Z'),
      },
      {
        id: 'hihi908657uigiugg',
        url: 'https://vimeo.com/74918975',
        author: 'amelie',
        title: 'Other vimeo player',
        width: 742,
        height: 298,
        duration: 60,
        tags: [],
        createdDate: new Date('2020-10-15T13:00:00.000Z'),
      },
    ],
    tags: [{ label: 'emmet', value: 'emmet' }],
  };

  describe('app/BOOKMARK/CREATE', () => {
    it('should return the right state when a BOOKMARK.CREATE is dispatched', () => {
      const action: CreateBookmarkAction = {
        type: BOOKMARK.CREATE,
        bookmark: {
          id: 'Y89Yfreiohi8978',
          url: 'https://vimeo.com/76979871',
          author: 'amelie',
          title: 'The new vimeo player',
          width: 398,
          height: 879,
          duration: 76,
          tags: [],
          createdDate: new Date('2020-10-15T12:00:00.000Z'),
        },
        tags: [
          { label: 'lorem', value: 'lorem' },
          { label: 'dolor', value: 'dolor' },
        ],
      };
      const state = mainReducer(initialState, action);
      expect(state).toEqual({
        bookmarks: [
          {
            id: 'fjirzjr89798789',
            url: 'http://www.flickr.com/photos/onement/1239189689/',
            author: 'amelie',
            title: 'The new image',
            width: 897,
            height: 866,
            tags: [],
            createdDate: new Date('2020-10-15T11:00:00.000Z'),
          },
          {
            id: 'hihi908657uigiugg',
            url: 'https://vimeo.com/74918975',
            author: 'amelie',
            title: 'Other vimeo player',
            width: 742,
            height: 298,
            duration: 60,
            tags: [],
            createdDate: new Date('2020-10-15T13:00:00.000Z'),
          },
          {
            id: 'Y89Yfreiohi8978',
            url: 'https://vimeo.com/76979871',
            author: 'amelie',
            title: 'The new vimeo player',
            width: 398,
            height: 879,
            duration: 76,
            tags: [
              { label: 'lorem', value: 'lorem' },
              { label: 'dolor', value: 'dolor' },
            ],
            createdDate: new Date('2020-10-15T12:00:00.000Z'),
          },
        ],
        tags: [{ label: 'emmet', value: 'emmet' }],
      });
    });
  });

  describe('app/BOOKMARK/EDIT', () => {
    it('should return the right state when a BOOKMARK.EDIT is dispatched', () => {
      const action: EditBookmarkAction = {
        type: BOOKMARK.EDIT,
        bookmarkId: 'fjirzjr89798789',
        tags: [
          { label: 'sit', value: 'sit' },
          { label: 'dolor', value: 'dolor' },
        ],
      };
      const state = mainReducer(initialState, action);
      expect(state).toEqual({
        bookmarks: [
          {
            id: 'fjirzjr89798789',
            url: 'http://www.flickr.com/photos/onement/1239189689/',
            author: 'amelie',
            title: 'The new image',
            width: 897,
            height: 866,
            tags: [
              { label: 'sit', value: 'sit' },
              { label: 'dolor', value: 'dolor' },
            ],
            createdDate: new Date('2020-10-15T11:00:00.000Z'),
          },
          {
            id: 'hihi908657uigiugg',
            url: 'https://vimeo.com/74918975',
            author: 'amelie',
            title: 'Other vimeo player',
            width: 742,
            height: 298,
            duration: 60,
            tags: [],
            createdDate: new Date('2020-10-15T13:00:00.000Z'),
          },
        ],
        tags: [{ label: 'emmet', value: 'emmet' }],
      });
    });
  });

  describe('app/BOOKMARK/DELETE', () => {
    it('should return the right state when a BOOKMARK.DELETE is dispatched', () => {
      const action: DeleteBookmarkAction = {
        type: BOOKMARK.DELETE,
        bookmarkId: 'hihi908657uigiugg',
      };
      const state = mainReducer(initialState, action);
      expect(state).toEqual({
        bookmarks: [
          {
            id: 'fjirzjr89798789',
            url: 'http://www.flickr.com/photos/onement/1239189689/',
            author: 'amelie',
            title: 'The new image',
            width: 897,
            height: 866,
            tags: [],
            createdDate: new Date('2020-10-15T11:00:00.000Z'),
          },
        ],
        tags: [{ label: 'emmet', value: 'emmet' }],
      });
    });
  });

  describe('app/TAGS/CREATE', () => {
    it('should return the right state when a TAGS.CREATE is dispatched', () => {
      const action: CreateTagsAction = {
        type: TAGS.CREATE,
        tags: [
          { label: 'emmet', value: 'emmet' },
          { label: 'sit', value: 'sit' },
          { label: 'dolor', value: 'dolor' },
        ],
      };
      const state = mainReducer(initialState, action);
      expect(state).toEqual({
        bookmarks: [
          {
            id: 'fjirzjr89798789',
            url: 'http://www.flickr.com/photos/onement/1239189689/',
            author: 'amelie',
            title: 'The new image',
            width: 897,
            height: 866,
            tags: [],
            createdDate: new Date('2020-10-15T11:00:00.000Z'),
          },
          {
            id: 'hihi908657uigiugg',
            url: 'https://vimeo.com/74918975',
            author: 'amelie',
            title: 'Other vimeo player',
            width: 742,
            height: 298,
            duration: 60,
            tags: [],
            createdDate: new Date('2020-10-15T13:00:00.000Z'),
          },
        ],
        tags: [
          { label: 'emmet', value: 'emmet' },
          { label: 'sit', value: 'sit' },
          { label: 'dolor', value: 'dolor' },
        ],
      });
    });
  });
});
