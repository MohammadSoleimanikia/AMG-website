import { FooterApiRes } from '@/_types/_footer';
import { FOOTER } from '.';
import { globalFetch } from '../utils/globalFetch';

export async function fetchFooterData() {
  return await globalFetch<FooterApiRes>(FOOTER);
}
