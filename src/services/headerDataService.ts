import { HeaderData } from '@/_types/_header';
import { HEADER } from '.';
import { globalFetch } from './globalFetch';

export async function fetchHeaderData() {
  return await globalFetch<HeaderData>(HEADER);
}
