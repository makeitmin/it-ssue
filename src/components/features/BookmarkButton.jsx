import React from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

/* 북마크 아이콘 버튼 */
const BookmarkButton = ({ isChecked, handleChangeInput }) => {
  return (
    <BookmarkCheckbox
      checked={isChecked}
      onChange={handleChangeInput}
      size="small"
      icon={<BookmarkBorderIcon />} // checked === false
      checkedIcon={<BookmarkIcon />} // checked === true
    />
  );
};

const BookmarkCheckbox = styled(Checkbox)`
  &&.MuiButtonBase-root {
    padding: 0px;
  }
`;

export default BookmarkButton;
