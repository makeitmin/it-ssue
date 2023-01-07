export const getBookmarks = () => {
  const localBookmarks = localStorage.getItem('ITSSUE_BOOKMARKS');
  if (localBookmarks === 'undefined') {
    return [];
  } else {
    return JSON.parse(localBookmarks);
  }
};

export const setBookmarks = array => {
  localStorage.setItem('ITSSUE_BOOKMARKS', JSON.stringify(array));
};
