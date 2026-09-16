"use client";

import { Comment } from "@/features/feed/Comment";
import { CommentForm } from "@/features/feed/CommentForm";
import * as styles from "./CommentList.css.js";

/*
TODO(2-23): 댓글 목록 쿼리와 페이지네이션을 구현합니다.
- 댓글 목록을 페이지별로 조회하고 다음 페이지 이동 준비

TODO(3-01): 댓글 추가 뮤테이션을 연결합니다.
- 댓글 입력을 서버 변경 요청과 연결

TODO(3-03): 댓글 추가 성공 후 화면을 동기화합니다.
- 댓글 목록과 댓글 수를 서버 데이터에 맞게 갱신
*/

function CommentList({ currentUserInfo, postId }) {
  void postId;

  const comments = [];

  // TODO(3-01): 댓글 추가 뮤테이션을 연결합니다.
  const handleAddComment = (newComment) => {
    void newComment;
  };

  return (
    <div className={styles.commentList}>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm
        currentUserInfo={currentUserInfo}
        onSubmit={handleAddComment}
        buttonDisabled={!currentUserInfo}
      />
    </div>
  );
}

export default CommentList;
