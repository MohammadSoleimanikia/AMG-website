'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useSWR, { useSWRConfig } from 'swr';

import { GET_USER } from '@/services';
import { GetUserResponse, User } from '@/_types/_user';
import { getFetcher } from '@/utils/getFetcher';
import { BaseResponse } from '@/_types/_bsResponse';
import { deleteCookie } from '@/services/cookie/deleteCookie';
import { HOME_PATH } from '@/path';

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoading: boolean;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({
  children,
  token,
}: {
  children: ReactNode;
  token: string | undefined;
}) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const { data, isLoading } = useSWR<BaseResponse<GetUserResponse>>(
    token ? GET_USER : null,
    getFetcher<GetUserResponse>,
    {},
  );
  console.log('SWRDATA', data?.data);

  useEffect(() => {
    if (data?.data?.user) {
      setUser(data.data.user);
      console.log('useEffect set user data useState');
    }
  }, [data]);

  const logout = () => {
    deleteCookie('accessToken');
    setUser(() => null);
    deleteCookie('accessToken');
    setUser(null);
    mutate(GET_USER, undefined, {
      revalidate: false,
    });

    router.replace(HOME_PATH);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used inside UserProvider');
  }

  return context;
};

export default UserProvider;
