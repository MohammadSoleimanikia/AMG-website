import { cookies } from 'next/headers';
export async function setCookie(tokenName: string,value:string) {
  const cookieStore = await cookies();
  cookieStore.set(tokenName,value);
}
