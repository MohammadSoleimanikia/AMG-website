import { cookies } from 'next/headers';
export async function getCookie(tokenName: string) {
  const cookieStore = await cookies();
  cookieStore.get(tokenName);
}
