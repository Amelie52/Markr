import { Bookmark, Tag } from './interfaces';

export enum BOOKMARK {
  CREATE = 'app/BOOKMARK/CREATE',
  EDIT = 'app/BOOKMARK/EDIT',
  DELETE = 'app/BOOKMARK/DELETE',
}

export enum TAGS {
  CREATE = 'app/TAGS/CREATE',
}

export interface CreateBookmarkAction {
  type: BOOKMARK.CREATE;
  bookmark: Bookmark;
  tags: Tag[];
}
export interface EditBookmarkAction {
  type: BOOKMARK.EDIT;
  bookmarkId: string;
  tags: Tag[];
}
export interface DeleteBookmarkAction {
  type: BOOKMARK.DELETE;
  bookmarkId: string;
}

export interface CreateTagsAction {
  type: TAGS.CREATE;
  tags: Tag[];
}

export type Action =
  | CreateBookmarkAction
  | EditBookmarkAction
  | DeleteBookmarkAction
  | CreateTagsAction;

export function createBookmark(bookmark: Bookmark, tags: Tag[]): CreateBookmarkAction {
  return {
    type: BOOKMARK.CREATE,
    bookmark,
    tags,
  };
}

export function editBookmark(bookmarkId: string, tags: Tag[]): EditBookmarkAction {
  return {
    type: BOOKMARK.EDIT,
    bookmarkId,
    tags,
  };
}

export function deleteBookmark(bookmarkId: string): DeleteBookmarkAction {
  return {
    type: BOOKMARK.DELETE,
    bookmarkId,
  };
}

export function createTags(tags: Tag[]): CreateTagsAction {
  return {
    type: TAGS.CREATE,
    tags,
  };
}
