import { jwtDecode, JwtPayload } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

export type UserRole =
  'user' | 'admin_super' | 'expert_financial' | 'expert_sale' | 'expert_warehouse';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;

  // Logged-in user shouldn't access login
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Profile and all its children require authentication
  if (!token && pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (token) {
    try {
      const decoded = jwtDecode<
        JwtPayload & {
          role: UserRole;
        }
      >(token.value);
      const { role } = decoded;


      // Sale
      if (
        pathname.startsWith('/profile/sale') &&
        role !== 'admin_super' &&
        role !== 'expert_sale'
      ) {
        return NextResponse.redirect(new URL('/', request.url));
      }

      // Warehouse
      if (
        pathname.startsWith('/profile/warehouse') &&
        role !== 'admin_super' &&
        role !== 'expert_warehouse'
      ) {
        return NextResponse.redirect(new URL('/', request.url));
      }

      // Financial
      if (
        pathname.startsWith('/profile/financial') &&
        role !== 'admin_super' &&
        role !== 'expert_financial'
      ) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch {
      // Invalid JWT
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}
