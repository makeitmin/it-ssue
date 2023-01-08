import create from 'zustand';

const useRepoStore = create(set => ({
  repos: [],
  setRepos: input => set(state => ({ repos: input })),
}));

export default useRepoStore;
