import { useSuspenseQuery } from '@tanstack/react-query';
import { axios } from '../axios';

export const BannerQueryKey = {
  all: ['banner-all'] as const,
  getBanner: () => [...BannerQueryKey.all, 'getBanner'] as const,
};
export type getBannerRs = {
  bannerNo: number;
  bannerTitle: string;
  bannerContent: string;
  bannerLink: string;
  imageUrl: string;
};

export const getBannerV1Api = async (): Promise<getBannerRs[]> => {
  const { data } = await axios.get('/api/banners');

  return data;
};

export const useBannerQuery = () => {
  return useSuspenseQuery({
    queryKey: [...BannerQueryKey.getBanner()],
    queryFn: getBannerV1Api,
  });
};
