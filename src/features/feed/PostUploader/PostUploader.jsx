"use client";

import { PostForm } from "@/features/feed/PostForm";
import { useLoginContext } from "@/contexts/LoginContext";

/*
TODO(3-01): 포스트 업로드 요청을 연결합니다.
- 입력 폼이 전달한 포스트를 서버로 보냅니다.
- 요청 중에는 업로드 버튼을 비활성화합니다.

TODO(3-03): 업로드 성공 후 화면을 동기화합니다.
- 업로드한 포스트가 반영되는 전체 목록과 사용자별 목록 갱신
*/

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
