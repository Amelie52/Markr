import { createBookmark, createTags, deleteBookmark, editBookmark } from './actions';

describe('app/actions', () => {
  describe('#createBookmark', () => {
    it('should return a app/BOOKMARK/CREATE action', () => {
      const action = createBookmark(
        {
          id: 'Y89Yfreiohi8978',
          url: 'https://vimeo.com/76979871',
          author: 'amelie',
          title: 'The new vimeo player',
          width: 398,
          height: 879,
          duration: 76,
          tags: [{ label: 'lorem', value: 'lorem' }],
          createdDate: new Date('2020-10-15T12:00:00.000Z'),
        },
        [
          { label: 'emmet', value: 'emmet' },
          { label: 'lorem', value: 'lorem' },
        ],
      );
      expect(action).toEqual({
        type: 'app/BOOKMARK/CREATE',
        bookmark: {
          id: 'Y89Yfreiohi8978',
          url: 'https://vimeo.com/76979871',
          author: 'amelie',
          title: 'The new vimeo player',
          width: 398,
          height: 879,
          duration: 76,
          tags: [{ label: 'lorem', value: 'lorem' }],
          createdDate: new Date('2020-10-15T12:00:00.000Z'),
        },
        tags: [
          { label: 'emmet', value: 'emmet' },
          { label: 'lorem', value: 'lorem' },
        ],
      });
    });
  });

  describe('#editBookmark', () => {
    it('should return a app/BOOKMARK/EDIT action', () => {
      const action = editBookmark('Y89Yfreiohi8978', [
        { label: 'emmet', value: 'emmet' },
        { label: 'lorem', value: 'lorem' },
      ]);
      expect(action).toEqual({
        type: 'app/BOOKMARK/EDIT',
        bookmarkId: 'Y89Yfreiohi8978',
        tags: [
          { label: 'emmet', value: 'emmet' },
          { label: 'lorem', value: 'lorem' },
        ],
      });
    });
  });

  describe('#deleteBookmark', () => {
    it('should return a app/BOOKMARK/DELETE action', () => {
      const action = deleteBookmark('Y89Yfreiohi8978');
      expect(action).toEqual({
        type: 'app/BOOKMARK/DELETE',
        bookmarkId: 'Y89Yfreiohi8978',
      });
    });
  });

  describe('#createTags', () => {
    it('should return a app/TAGS/CREATE action', () => {
      const action = createTags([
        { label: 'emmet', value: 'emmet' },
        { label: 'lorem', value: 'lorem' },
      ]);
      expect(action).toEqual({
        type: 'app/TAGS/CREATE',
        tags: [
          { label: 'emmet', value: 'emmet' },
          { label: 'lorem', value: 'lorem' },
        ],
      });
    });
  });
});
