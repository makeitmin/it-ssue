import React, { useEffect, useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';

import WarningAlert from './WarningAlert';

const BookmarkButton = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const { setUserBookmarks } = useBookmarkStore(state => state);

  useEffect(() => {
    const bookmarks = getBookmarks();
    if (bookmarks.find(b => b.id === data.id)) {
      setIsChecked(true);
    }
  });

  const handleChangeBookmark = event => {
    let temp = getBookmarks();
    if (event.target.checked) {
      if (temp.length >= 4) {
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
