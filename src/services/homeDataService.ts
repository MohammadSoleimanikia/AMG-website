import { Home } from '.';
import { HomeType } from '@/_types/_home';
import { globalFetch } from '../utils/globalFetch';

export const fetchHomeData = async (
  revalidateTime: number = 60,
  restProps?: RequestInit,
) => {
  return await globalFetch<HomeType.HomeContent>(Home);
};
