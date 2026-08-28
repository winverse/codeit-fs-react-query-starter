# React Query 실습 프로젝트

이 프로젝트는 공부 기록을 공유하는 SNS 화면에 TanStack Query의 조회, 캐시, mutation과 Optimistic Updates를 단계적으로 적용하기 위한 시작 코드입니다.

처음 실행하면 상단 탐색 메뉴와 로그인 메뉴, 비어 있는 피드 영역이 표시됩니다. 화면과 API 함수, 스타일은 준비되어 있고, 각 강의 항목에서 `TODO`가 있는 조회·변경 파일을 순서대로 완성합니다. 같은 폴더에서 앞선 결과를 누적하며 Git 브랜치를 전환하지 않습니다.

주로 수정하는 파일은 다음과 같습니다.

- `src/providers/AppProviders.jsx`
- `src/lib/queryKeys.js`
- `src/domains/feed/PostForm/PostForm.jsx`
- `src/domains/feed/hooks/usePostListQuery.js`
- `src/components/UserMenu/UserMenu.jsx`
- `src/domains/my-feed/MyFeedPage/MyFeedPage.jsx`
- `src/components/QueryBoundary/QueryBoundary.jsx`
- `src/domains/feed/CommentList/CommentList.jsx`
- `src/domains/feed/PostUploader/PostUploader.jsx`
- `src/domains/feed/hooks/useLikeMutation.js`
- `src/domains/feed/Post/Post.jsx`

## 시작하기

```bash
git clone https://github.com/winverse/codeit-fs-react-query-starter.git
cd codeit-fs-react-query-starter
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열어 홈 화면을 확인합니다. 개발 서버는 터미널에서 `Ctrl + C`를 눌러 종료합니다.
