# it-ssue

## 서비스 개요
itssue(잇슈)는 깃허브 레포지토리를 검색하고 북마크에 등록한 레포지토리의 이슈를 모아볼 수 있는 서비스입니다.

## 개발 환경
- Node.js 16
- React.js 18
- GitHub API

## 라이브러리
- axios (REST API 통신)
- zustand (전역 상태관리)
- Material-UI (스타일)
- styled-components (스타일)

## 실행 방법
1. Github token 발급 후 config.js 수정
```
# configs/config.js
export const token = "발급 받은 키";
```
2. 프로젝트 최상위 경로에서 실행
```
> npm install
> npm run start
```


# 프로젝트 구조
```
.
├── node_modules
├── package-lock.json // npm 패키지 종속성 파일 (삭제 x)
├── package.json // npm 패키지 목록
├── public
└── src
    ├── App.js // router 코드
    ├── components
    │   ├── features
    │   │   ├── BookmarkButton.jsx  # 북마크 버튼
    │   │   ├── ExpansionPanel.jsx  # 북마크 접기/펼치기 
    │   │   ├── IssueBookmarkBox.jsx  # 모아보기 - 내 북마크 영역
    │   │   ├── IssueBox.jsx  # 모아보기 - 이슈 목록 영역
    │   │   ├── IssueCard.jsx  # 개별 이슈 카드
    │   │   ├── NavBar.jsx  # 상단바
    │   │   ├── RepoCard.jsx  # 개별 레포지토리 카드
    │   │   ├── SearchBookmarkBox.jsx  # 검색하기 - 내 북마크 영역
    │   │   ├── SearchInputBox.jsx  # 검색하기 - 검색창
    │   │   ├── SearchResultBox.jsx  # 검색하기 - 레포지토리 검색 결과 영역
    │   │   └── WarningAlert.jsx  # 북마크 초과 시 알림
    │   └── styles
    │       ├── Cards.jsx  # 영역 스타일 컴포넌트
    │       └── Texts.jsx  # 텍스트 스타일 컴포넌트
    ├── configs
    │   └── config.js  # GitHub 토큰
    ├── index.js
    ├── pages
    │   ├── Issue.js  # 모아보기 페이지
    │   └── Search.js  # 검색하기 페이지
    ├── store
    │   ├── useBookmarkStore.js  # 북마크 전역 store
    │   └── useRepoStore.js. # 검색된 레포지토리 전역 store
    └── utils.js  # 기타 함수
```
