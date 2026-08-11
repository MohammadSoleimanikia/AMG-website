'use server'
import { cookies } from 'next/headers';
export async function getCookie(tokenName: string) {
  const cookieStore = await cookies();
  return cookieStore.get(tokenName)?.value;
}
