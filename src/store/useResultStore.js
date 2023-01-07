import create from 'zustand';

const useResultStore = create(set => ({
  repos: [],
  setRepos: input => set(state => ({ repos: input })),
}));

export default useResultStore;
