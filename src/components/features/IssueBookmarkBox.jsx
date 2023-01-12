import React from 'react';

import { CardActions, Box } from '@mui/material';

import useBookmarkStore from '../../store/useBookmarkStore';
import { Paragraph3 } from '../styles/Texts';

import RepoCard from './RepoCard';

/* 모아보기 - '내 북마크' 영역 */
const IssueBookmarkBox = ({ setTargetRepo }) => {
  /* 북마크 배열 변수 (전역) */
  const { userBookmarks } = useBookmarkStore(state => state);

  return (
    <Box
      style={{
        overflowX: 'auto',
        width: '100%',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
      }}
    >
      {userBookmarks.length > 0 ? (
        userBookmarks.map((bm, idx) => {
          return (
            <Box key={bm.id} style={{ width: '250px', marginRight: '10px' }}>
              <CardActions
                key={bm.id}
                onClick={event => {
                  if (userBookmarks.find((ub, idx) => ub.id === bm.id)) {
                    setTargetRepo(bm.full_name);
                  }
                }}
                style={{ padding: '0px', position: 'relative' }}
              >
                <RepoCard details={bm} />
              </CardActions>
            </Box>
          );
        })
      ) : (
        /* 북마크 없을 경우 */
        <Paragraph3>북마크를 추가해보세요!</Paragraph3>
      )}
    </Box>
  );
};

export default IssueBookmarkBox;
