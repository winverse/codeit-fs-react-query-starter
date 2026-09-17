"use client";

import { Comment } from "@/features/feed/Comment";
import { CommentForm } from "@/features/feed/CommentForm";
import * as styles from "./CommentList.css.js";

function CommentList({ currentUserInfo, postId }) {
  void postId;

  const comments = [];

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
