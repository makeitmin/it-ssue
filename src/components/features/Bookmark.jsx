import React, { useEffect, useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';

const Bookmark = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
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
    <BookmarkButton
      checked={isChecked}
      onChange={handleChangeBookmark}
      size="small"
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
    />
  );
};

const BookmarkButton = styled(Checkbox)`
  &&.MuiButtonBase-root {
    padding: 0px;
  }
`;

export default Bookmark;
