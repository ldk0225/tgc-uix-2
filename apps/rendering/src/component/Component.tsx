"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Suspense } from "react";
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
