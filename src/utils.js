/* localStorage에 등록된 사용자 Repository 배열을 가져오는 함수 */
export const getBookmarks = () => {
  const localBookmarks = localStorage.getItem('ITSSUE_BOOKMARKS');
  if (['undefined', null].includes(localBookmarks)) {
    /* localStorage의 데이터가 존재하지 않거나 값이 null 일 경우 */
    return [];
  } else {
    return JSON.parse(localBookmarks);
  }
};

/* localStorage에 사용자 Repository 배열을 할당하는 함수 */
export const setBookmarks = array => {
  localStorage.setItem('ITSSUE_BOOKMARKS', JSON.stringify(array));
};

/* 배경색(color)에 따라 명도, 채도에 맞는 내부 텍스트 색상을 반환하는 함수 */
export const getTextColor = color => {
  if (!color) {
    return '';
  }
  return parseInt(color.replace('#', ''), 16) > 0xffffff / 2
    ? '#000000'
    : '#FFFFFF';
};
