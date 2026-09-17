"use client";

import { Suspense } from "react";
import { Loading } from "@/components/Loading";

/*
TODO(4-06): 대기 상태뿐 아니라 오류 표시와 다시 시도까지 처리하는
공통 조회 경계로 완성합니다.
*/

function QueryBoundary({ children, pendingFallback }) {
  return (
    <Suspense
      fallback={
        pendingFallback || (
          <Loading
            title="로딩 중입니다..."
            description="잠시만 기다려주세요."
          />
        )
      }
    >
      {children}
    </Suspense>
  );
}

export default QueryBoundary;
