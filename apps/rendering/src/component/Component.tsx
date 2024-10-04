"use client";

import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "src/component/errors/ErrorFallback";
import CommonLoadingFallback from "src/component/loadings/CommonLoadingFallback";
import { axios } from "../apis/axios";
import * as S from "./Component.style";

interface Banner {
  id: number;
  url: string;
}

const Component = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<CommonLoadingFallback />}>
        <Grid />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Component;

const Grid = () => {
  const { data: banners } = useSuspenseQuery<Banner[]>({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axios.get("/api/banners");
      return data;
    },
  });

  // 새로고침시 loading fallback을 보여주기 위해 캐싱 최적화 제거를 위한 추가 코드입니다.
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ["banners"],
    });
  }, [queryClient]);

  return (
    <S.Grid>
      {banners.map(({ id, url }) => (
        <Image
          key={id}
          src={url}
          alt={`image_${id}`}
          width={200}
          height={300}
          priority
        />
      ))}
    </S.Grid>
  );
};
