'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

import { GET_USER } from '@/services';
import { GetUserResponse, User } from '@/_types/_user';
import { getFetcher } from '@/services/getFetcher';
import { BaseResponse } from '@/_types/_bsResponse';

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({
  children,
  token,
}: {
  children: ReactNode;
  token: string | undefined;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const { data, isLoading } = useSWR<BaseResponse<GetUserResponse>>(
    token ? GET_USER : null,
    getFetcher<GetUserResponse>,
  );

  useEffect(() => {
    if (data?.data?.user) {
      setUser(data.data.user);
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
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
