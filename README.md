# React Query 실습 프로젝트

이 프로젝트는 공부 기록을 공유하는 SNS 화면에 TanStack Query의 조회, 캐시, mutation과 Optimistic Updates를 단계적으로 적용하기 위한 시작 코드입니다.

처음 실행하면 상단 탐색 메뉴와 로그인 메뉴, 비어 있는 피드 영역이 표시됩니다. 공통 화면·API 함수·스타일은 준비되어 있고, 포스트 목록을 가져오는 조회 코드는 아직 비어 있어 피드에 포스트가 표시되지 않습니다. 좋아요 변경과 조회 오류 복구는 아직 동작하지 않습니다. 각 강의 항목에서 `TODO`가 표시된 파일을 순서대로 완성하며, 이후에도 같은 폴더에 변경 사항을 누적합니다.

처음 제공되는 `QueryBoundary`는 조회 대기 화면만 표시합니다. 2장의 오류 처리 항목에서 오류 표시와 다시 시도 기능까지 완성합니다.

주로 수정하는 파일은 다음과 같습니다.

- `src/providers/AppProviders.jsx`
- `src/lib/queryKeys.js`
- `src/features/feed/PostForm/PostForm.jsx`
- `src/features/feed/hooks/usePostListQuery.js`
- `src/components/UserMenu/UserMenu.jsx`
- `src/features/my-feed/MyFeedPage/MyFeedPage.jsx`
- `src/components/QueryBoundary/QueryBoundary.jsx`
- `src/features/feed/CommentList/CommentList.jsx`
- `src/features/feed/PostUploader/PostUploader.jsx`
- `src/features/feed/hooks/useLikeMutation.js`
- `src/features/feed/Post/Post.jsx`

## 시작하기

```bash
git clone https://github.com/winverse/codeit-fs-react-query-starter.git
cd codeit-fs-react-query-starter
pnpm install
pnpm add @tanstack/react-query
pnpm add -D @tanstack/react-query-devtools
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열어 홈 화면을 확인합니다. 개발 서버는 터미널에서 `Ctrl + C`를 눌러 종료합니다.
