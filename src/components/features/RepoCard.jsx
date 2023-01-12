import React, { useState, useEffect } from 'react';

import BugReportIcon from '@mui/icons-material/BugReport';
import StarIcon from '@mui/icons-material/Star';
import { CardContent, Box, Avatar } from '@mui/material';
import styled from 'styled-components';

import useBookmarkStore from '../../store/useBookmarkStore';
import { getBookmarks } from '../../utils';
import { PlainCard } from '../styles/Cards';
import { Header3, Paragraph3 } from '../styles/Texts';

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
      /* localStorage 에 저장되는 북마크 데이터 */
      temp.push({
        id: details.id,
        full_name: details.full_name,
        open_issues: details.open_issues,
        stargazers_count: details.stargazers_count,
        owner: { avatar_url: details.owner.avatar_url },
      });
    } else {
      /* 북마크 O -> 북마크 X 일 경우 */
      /* 기존 북마크 배열의 요소와 클릭된 북마크의 id 비교 후 삭제 */
      temp = temp.filter((t, idx) => t.id !== details.id);
      if (refs && refs.current[`repo-${details.id}`]) {
        /* 
          탐색할 refs가 존재할 경우에만
          클릭된 북마크와 같은 Repository의 북마크를 영역 내에서 ref로 탐색하여 클릭 이벤트 유발
        */
        refs.current[
          `repo-${details.id}`
        ].children[0].children[0].children[0].children[0].children[1].children[0].click();
      }
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
        <CardContent style={{ height: '90px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                alignItems: 'baseline',
              }}
            >
              <OverflowBox>
                <Avatar
                  alt={details.full_name}
                  src={details.owner.avatar_url}
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                <Header3>{details.full_name}</Header3>
              </OverflowBox>
              <BookmarkButton
                style={{ position: 'absolute', right: 0, zIndex: 1000 }}
                isChecked={isChecked}
                onClick={event => event.stopPropagation()}
                handleChangeInput={handleChangeBookmark}
              />
            </Box>
            <Box>
              <Paragraph3>
                <StarIcon fontSize="10" />
              </Paragraph3>
              <Paragraph3>스타 {details.stargazers_count}개</Paragraph3>
              <Paragraph3>
                <BugReportIcon fontSize="10" />
              </Paragraph3>
              <Paragraph3>이슈 {details.open_issues}개</Paragraph3>
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

/* 커스텀 컴포넌트 */
const OverflowBox = styled(Box)`
  && {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 24px);
  }
`;

export default RepoCard;
