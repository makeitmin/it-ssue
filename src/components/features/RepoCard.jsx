import React, { useState, useEffect } from 'react';

import { CardContent, Box, Chip } from '@mui/material';
import styled from 'styled-components';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';
import { PlainCard } from '../styles/Cards';
import { Header3 } from '../styles/Texts';

import BookmarkButton from './BookmarkButton';
import WarningAlert from './WarningAlert';

const RepoCard = ({ details, refs }) => {
  const [isChecked, setIsChecked] = useState(false); // 북마크 체크 여부
  const [isAlertOpen, setIsAlertOpen] = useState(false); // 개수 초과 Alert 노출 여부

  /* 북마크 배열 변수 (전역) */
  const { userBookmarks, setUserBookmarks } = useBookmarkStore(state => state);

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
        id: details.id,
        full_name: details.full_name,
        topics: details.topics,
      });
    } else {
      /* 북마크 O -> 북마크 X 일 경우 */
      /* 기존 북마크 배열의 요소와 클릭된 북마크의 id 비교 후 삭제 */
      temp = temp.filter((t, idx) => t.id !== details.id);
      /* 클릭된 북마크와 같은 Repository의 북마크를 검색된 영역 내에서 ref로 탐색하여 클릭 이벤트 유발 */
      refs.current[
        `repo-${details.id}`
      ].children[0].children[0].children[0].children[1].children[0].click();
    }
    setUserBookmarks(temp);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    /* 기존 북마크 배열과 비교하여 해당 Repository의 북마크 여부 확인 */
    if (userBookmarks.find(b => b.id === details.id)) {
      setIsChecked(true);
    }
  });

  return (
    <>
      <PlainCard>
        <CardContent style={{ height: '70px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <TitleBox>
                <Header3>{details.full_name}</Header3>
              </TitleBox>
              <Box>
                <BookmarkButton
                  isChecked={isChecked}
                  handleChangeInput={handleChangeBookmark}
                />
              </Box>
            </Box>
            <Box
              style={{
                whiteSpace: 'nowrap',
                overflowX: 'auto',
                width: '100%',
              }}
            >
              {details.topics.map((topic, idx) => (
                <Chip
                  key={topic}
                  label={`${topic}`}
                  size="small"
                  style={{ marginRight: '8px' }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </PlainCard>
      <WarningAlert
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
        message="북마크는 4개를 초과할 수 없습니다"
      />
    </>
  );
};

const TitleBox = styled(Box)`
  && {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 24px);
  }
`;

export default RepoCard;
