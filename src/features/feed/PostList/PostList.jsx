"use client";

import { Post } from "@/features/feed/Post";
import { FEED_VARIANT } from "@/lib/constants";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { Warn } from "@/components/Warn";
import { useLoginContext } from "@/contexts/LoginContext";
import usePostListQuery from "@/features/feed/hooks/usePostListQuery";
import * as styles from "./PostList.css.js";

function PostList({ variant = FEED_VARIANT.HOME_FEED }) {
  const { currentUsername } = useLoginContext();

  // 1. 포스트 목록 조회 훅으로 데이터를 가져옵니다.
  const {
    data: postsData,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = usePostListQuery({ variant, currentUsername });

  // 첫 페이지를 받기 전과 조회에 실패했을 때는 목록 대신 안내 화면을 보여 줍니다.
  if (isPending) {
    return (
      <Loading title="로딩 중입니다..." description="잠시만 기다려주세요." />
    );
  }

  if (isError) {
    return (
      <Warn
        variant="big"
        title="문제가 발생했습니다."
        description="잠시 후 다시 시도해 주세요."
      />
    );
  }

  // 2. 누적된 페이지 배열을 꺼냅니다.
  const postsPages = postsData.pages;

  return (
    <div className={styles.postList}>
      {/* 3. 페이지별 결과를 이어 붙여 렌더링합니다. */}
      {postsPages.map((postPage) =>
        postPage.results.map((post) => <Post key={post.id} post={post} />),
      )}
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
      >
        {isFetchingNextPage ? "더 불러오는 중..." : "더 불러오기"}
      </Button>
    </div>
  );
}

export default PostList;
