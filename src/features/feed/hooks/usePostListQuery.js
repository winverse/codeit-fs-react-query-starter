function usePostListQuery({ variant, currentUsername }) {
  void variant;
  void currentUsername;

  return {
    data: { pages: [] },
    isPending: false,
    isError: false,
    fetchNextPage: () => {},
    hasNextPage: false,
    isFetching: false,
    isFetchingNextPage: false,
  };
}

export default usePostListQuery;
