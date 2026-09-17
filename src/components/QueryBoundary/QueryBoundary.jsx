"use client";

import { Suspense } from "react";
import { Loading } from "@/components/Loading";

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
