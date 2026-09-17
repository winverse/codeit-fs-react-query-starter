"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/Card";
import { Loading } from "@/components/Loading";
import { Warn } from "@/components/Warn";
import { ContentInfo } from "@/features/feed/ContentInfo";
import { Button } from "@/components/Button";
import { CommentList } from "@/features/feed/CommentList";
import { queryKeys } from "@/lib/queryKeys";
import {
  getCommentCountByPostId,
  getUserInfo,
  getLikeStatusByUsername,
  getLikeCountByPostId,
} from "@/lib/api";
import { useLoginContext } from "@/contexts/LoginContext";
import * as styles from "./Post.css.js";

const YELLOW_HEART_IMAGE = "/assets/yellow-heart.png";
const GREY_HEART_IMAGE = "/assets/grey-heart.png";

function Post({ post }) {
  const { currentUsername } = useLoginContext();

  if (currentUsername) {
    return <PostWithUser post={post} currentUsername={currentUsername} />;
  }

  return <PostWithoutUser post={post} />;
}

function PostWithUser({ post, currentUsername }) {
  const {
    data: currentUserInfo,
    isPending: isUserInfoPending,
    isError: isUserInfoError,
  } = useQuery({
    queryKey: queryKeys.user.info(currentUsername),
    queryFn: () => getUserInfo(currentUsername),
  });

  const {
    data: isPostLikedByCurrentUser,
    isPending: isLikeStatusPending,
    isError: isLikeStatusError,
  } = useQuery({
    queryKey: queryKeys.posts.likeStatus(post.id, currentUsername),
    queryFn: () => getLikeStatusByUsername(post.id, currentUsername),
  });

  if (isUserInfoPending || isLikeStatusPending) {
    return <Loading description="포스트를 불러오는 중입니다..." />;
  }

  if (isUserInfoError || isLikeStatusError) {
    return <Warn description="포스트를 불러오지 못했습니다." />;
  }

  return (
    <PostContent
      post={post}
      currentUsername={currentUsername}
      currentUserInfo={currentUserInfo}
      isPostLikedByCurrentUser={isPostLikedByCurrentUser}
    />
  );
}

function PostWithoutUser({ post }) {
  return <PostContent post={post} />;
}

function PostContent({
  post,
  currentUsername,
  currentUserInfo,
  isPostLikedByCurrentUser = false,
}) {
  const router = useRouter();
  const [showCommentList, setShowCommentList] = useState(false);

  const {
    data: commentCount,
    isPending: isCommentCountPending,
    isError: isCommentCountError,
  } = useQuery({
    queryKey: queryKeys.posts.commentCount(post.id),
    queryFn: () => getCommentCountByPostId(post.id),
  });

  const {
    data: likeCount,
    isPending: isLikeCountPending,
    isError: isLikeCountError,
  } = useQuery({
    queryKey: queryKeys.posts.likeCount(post.id),
    queryFn: () => getLikeCountByPostId(post.id),
  });

  const handleCommentButtonClick = () => {
    if (!currentUsername) {
      router.push("/not-logged-in");
      return;
    }
    setShowCommentList((isShown) => !isShown);
  };

  if (isCommentCountPending || isLikeCountPending) {
    return <Loading description="포스트를 불러오는 중입니다..." />;
  }

  if (isCommentCountError || isLikeCountError) {
    return <Warn description="포스트를 불러오지 못했습니다." />;
  }

  return (
    <Card className={styles.post}>
      <div className={styles.content}>
        <ContentInfo user={post.user} updatedTime={post.updatedAt} />
        <p className={styles.description}>{post.content}</p>
        <div className={styles.engagement}>
          <Button
            className={clsx(styles.engagementButton, styles.likeButton)}
            disabled={true}
          >
            <Image
              className={styles.like}
              src={
                isPostLikedByCurrentUser ? YELLOW_HEART_IMAGE : GREY_HEART_IMAGE
              }
              alt="좋아요"
              width={12}
              height={12}
            />
            {`좋아요 ${likeCount}개`}
          </Button>
          <Button
            className={styles.engagementButton}
            onClick={handleCommentButtonClick}
          >
            {`댓글 ${commentCount}개`}
          </Button>
        </div>
        {showCommentList && (
          <CommentList currentUserInfo={currentUserInfo} postId={post.id} />
        )}
      </div>
    </Card>
  );
}

export default Post;
