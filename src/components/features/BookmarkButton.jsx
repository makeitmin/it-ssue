import React, { useEffect, useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';

import WarningAlert from './WarningAlert';

const BookmarkButton = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false); // 북마크 체크 여부
  const [isAlertOpen, setIsAlertOpen] = useState(false); // 개수 초과 Alert 노출 여부

  /* 북마크 배열 변수 (전역) */
  const { userBookmarks, setUserBookmarks } = useBookmarkStore(state => state);

  useEffect(() => {
    /* 기존 북마크 배열과 비교하여 해당 Repository의 북마크 여부 확인 */
    if (userBookmarks.find(b => b.id === data.id)) {
      setIsChecked(true);
    }
  });

  const handleChangeBookmark = event => {
    let temp = getBookmarks();

    if (event.target.checked) {
      /* 북마크 X -> 북마크 O 일 경우 */
      if (temp.length >= 4) {
        /* 기존 북마크 4개 초과시 */
        setIsAlertOpen(true);
        event.target.checked = false;
        return false;
      }
      temp.push({
        id: data.id,
        full_name: data.full_name,
        topics: data.topics,
      });
    } else {
      /* 북마크 X -> 북마크 O 일 경우 */
      temp = temp.filter((t, idx) => t.id !== data.id);
    }
    setUserBookmarks(temp);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <BookmarkCheckbox
        checked={isChecked}
        onChange={handleChangeBookmark}
        size="small"
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      <WarningAlert
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
        message="북마크는 4개를 초과할 수 없습니다"
      />
    </>
  );
};

const BookmarkCheckbox = styled(Checkbox)`
  &&.MuiButtonBase-root {
    padding: 0px;
  }
`;

export default BookmarkButton;
