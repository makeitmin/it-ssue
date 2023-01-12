import create from 'zustand';

import { setBookmarks } from '../utils';

/* 북마크된 레포지토리 목록 관리 */
const useBookmarkStore = create(set => ({
  userBookmarks: [],
  setUserBookmarks: input => {
    set(state => ({ userBookmarks: input }));
    setBookmarks(input);
  },
}));

export default useBookmarkStore;
