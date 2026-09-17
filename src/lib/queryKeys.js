export const queryKeys = {
  posts: {
    all: () => ["posts"],
  },
  user: {
    info: (username) => ["user", username],
  },
};
