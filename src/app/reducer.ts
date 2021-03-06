import { Action, BOOKMARK, TAGS } from './actions';
import { Bookmark, Tag } from './interfaces';

export type State = {
  bookmarks: Bookmark[];
  tags: Tag[];
};

export const initialState = {
  bookmarks: [],
  tags: [],
};

export function mainReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case BOOKMARK.CREATE:
      return {
        ...state,
        bookmarks: [...state.bookmarks, { ...action.bookmark, tags: action.tags }],
      };
    case BOOKMARK.EDIT:
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.bookmarkId) {
            return {
              ...bookmark,
              tags: action.tags,
            };
          }
          return bookmark;
        }),
      };
    case BOOKMARK.DELETE:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => {
          return bookmark.id !== action.bookmarkId;
        }),
      };
    case TAGS.CREATE:
      const newTags = action.tags.filter((tag) => {
        return !state.tags.some((e) => tag.value === e.value);
      });

      return {
        ...state,
        tags: [...state.tags, ...newTags],
      };
    default:
      throw new Error();
  }
}
