"use client";

import { PostForm } from "@/features/feed/PostForm";
import { useLoginContext } from "@/contexts/LoginContext";

function PostUploader() {
  const { currentUsername } = useLoginContext();

  const handleUploadPost = (newPost) => {
    void newPost;
  };

  if (!currentUsername) {
    return null;
  }

  return <PostForm onSubmit={handleUploadPost} buttonDisabled={false} />;
}

export default PostUploader;
