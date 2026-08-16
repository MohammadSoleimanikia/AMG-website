import { jwtDecode, JwtPayload } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_PATH,
  FINANCIAL_PATH,
  HOME_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
  SALE_PATH,
  WAREHOUSE_PATH,
} from './path';

export type UserRole =
  'user' | 'admin_super' | 'expert_financial' | 'expert_sale' | 'expert_warehouse';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;

  // Logged-in user shouldn't access login
  if (token && pathname === LOGIN_PATH) {
    return NextResponse.redirect(new URL(HOME_PATH, request.url));
  }

  // Profile and all its children require authentication
  if (!token && pathname.startsWith(PROFILE_PATH)) {
    return NextResponse.redirect(new URL(HOME_PATH, request.url));
  }

  if (token) {
    try {
      const decoded = jwtDecode<
        JwtPayload & {
          role: UserRole;
        }
      >(token.value);
      const { role } = decoded;

      // admin
      if (
        pathname.startsWith(ADMIN_PATH) &&
        role !== 'admin_super'
      ) {
        return NextResponse.redirect(new URL(HOME_PATH, request.url));
      }

      // Sale
      if (
        pathname.startsWith(SALE_PATH) &&
        role !== 'admin_super' &&
        role !== 'expert_sale'
      ) {
        return NextResponse.redirect(new URL(HOME_PATH, request.url));
      }

      // Warehouse
      if (
        pathname.startsWith(WAREHOUSE_PATH) &&
        role !== 'admin_super' &&
        role !== 'expert_warehouse'
      ) {
        return NextResponse.redirect(new URL(HOME_PATH, request.url));
      }

      // Financial
      if (
        pathname.startsWith(FINANCIAL_PATH) &&
        role !== 'admin_super' &&
        role !== 'expert_financial'
      ) {
        return NextResponse.redirect(new URL(HOME_PATH, request.url));
      }
    } catch {
      // Invalid JWT
      return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
  }

  return NextResponse.next();
}
