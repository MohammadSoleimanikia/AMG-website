import { cookies } from 'next/headers';
export async function deleteCookie(tokenName: string) {
  const cookieStore = await cookies();
  cookieStore.delete(tokenName);
}
