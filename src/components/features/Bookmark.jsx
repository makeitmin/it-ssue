import React, { useEffect, useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox } from '@mui/material';

import { getBookmarks, setBookmarks } from '../../utils';

const Bookmark = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarks();
    if (bookmarks.find(b => b === id)) {
      setIsChecked(true);
    }
  });

  const handleChangeBookmark = event => {
    let temp = getBookmarks();
    if (event.target.checked) {
      temp.push(id);
    } else {
      temp = temp.filter((bId, idx) => bId !== id);
    }
    setBookmarks(temp);
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleChangeBookmark}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
    />
  );
};

export default Bookmark;
