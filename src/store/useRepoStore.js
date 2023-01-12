import create from 'zustand';

/* 검색된 레포지토리 결과 목록 관리 */
export const useRepoStore = create(set => ({
  repos: [],
  setRepos: input => set(state => ({ repos: input })),
}));
