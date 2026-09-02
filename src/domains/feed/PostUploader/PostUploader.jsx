'use client';

import { PostForm } from '@/domains/feed/PostForm';
import { useLoginContext } from '@/contexts/LoginContext';

/*
TODO(3-01): 업로드 로직을 뮤테이션으로 구현합니다.
- uploadPost 호출
- mutate 연결 및 isPending으로 버튼 제어

TODO(3-03): 업로드 성공 후 화면을 동기화합니다.
- 업로드한 포스트가 반영되는 전체 목록과 사용자별 목록 갱신
*/

function PostUploader() {
  const { currentUsername } = useLoginContext();

  const handleUploadPost = (newPost) => {
    void newPost;
  };

  if (!currentUsername) return null;

  return <PostForm onSubmit={handleUploadPost} buttonDisabled={false} />;
}

export default PostUploader;
