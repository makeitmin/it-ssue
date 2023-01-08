import create from 'zustand';

import { setBookmarks } from '../utils';

const useBookmarkStore = create(set => ({
  userBookmarks: [],
  setUserBookmarks: input => {
    set(state => ({ userBookmarks: input }));
    setBookmarks(input);
  },
}));

export default useBookmarkStore;
