import create from 'zustand';

/* 검색된 레포지토리 결과 목록 관리 */
export const useRepoStore = create(set => ({
  repos: [],
  setRepos: input => {
    set(state => {
      input = input.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      );
      return { repos: input };
    });
  },
}));
