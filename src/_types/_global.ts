import { ReactNode } from 'react';
import { UserTypes } from './_user';

export type ChildrenProp = {
  children: ReactNode;
};

export type ClassProp = {
  className?: string;
};

export type OptionValues = {
  label: string;
  value: string;
};

export type OptionValue = {
  value: number | string;
  label: string;
};
export type GenOptionValue<ValueType> = {
  value: ValueType;
  label: string;
};

export type PaginationType = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  total_items?: number;
  total_page: number;
};

export type FiltersTypes = {
  brands: { id: number; title: string }[];
  categories: { id: number; title: string }[];

  cars: { id: number; title: string }[];
  price: {
    min: number;
    max: number;
  };
};

export type GlobalModalProps = {
  isShow: boolean;
  closeModal: () => void;
};

export type LatestCommentProps = {
  description: string;
  name: string;
  role: UserTypes.UserRole;
};


export interface SiteSettingsDto {
  siteName?: string;
  siteUrl?: string;
  defaultTitle?: string;
  titleTemplate?: string;
  description?: string;
  ogImage?: string;
  locale?: string;
  applicationName?: string;

  robotsIndex?: boolean;
  robotsFollow?: boolean;

  twitterCard?: 'summary' | 'summary_large_image';
}


export type SiteInfoApiRes ={
    fa_name: string;
    en_name: string;
    url: string;
    shortDescription: string;
    slogans: string;
    tags: string| null;
    favIcon: string;
  }
