import { FiltersTypes, PaginationType } from './_global';

export namespace ProductTypes {
  export type BrandValue = { brand_name: string; brand_id: number };
  export type PackageValue = {
    brand_id: number;
    color_code: string;
    color_name: string;
    count: number;
    id: number;
    price: string;
    size: string;
    warranty: string;
  };

  export type BestOfferProduct={
    href:string;
    imagePath:string;
    title:string
  }
  export interface Product {
    d: {
      prices: {
        cash: string;
      };
      oldPrices: {
        cash: string;
      };
    };
    id: number;
    name: string;
    parent_en_title: string;
    en_title: string;
    fa_title: string;
    parent_fa_title: string;
    categoryName: string;
    categoryPath?: string;
    en_name: string;
    stars?: number;
    sale_is_open: 0 | 1;
    sale_only_cash: 0 | 1;
    url?: string;
    price: {
      cash: string;
      credit: string;
      checkes: { [index: string]: string };
    };
    oldPrice?: {
      cash: string;
      credit: string;
      checkes: { [index: string]: string };
    };
    cover: string;
    images: string[];
    discount?: number;
    defaults: {
      package: PackageValue;
      brand: BrandValue;
    } | null;
    inventory?: 0 | 1;
    shortDescription?: string;
    colors: string[];
    description?: string;
    tags: string[];
    salesCount?: number;
    countDown?: number;
    warehouseInventory?: number;
    ratio: number;
    satisfaction?: number;
    scoresSection?: {
      '1_stars': string;
      '2_stars': string;
      '3_stars': string;
      '4_stars': string;
      '5_stars': string;
    };
    update?: string;
    features: string[];
    commentsCount?: number;
    related_products?: RelatedProduct[];
    comments: Comment;
    additionalInformation?: string;
    type: 0 | 1;
    brands: BrandValue[];
    packages: PackageValue[];
    minCount?: number;
    maxCount?: number;
  }

  interface Comment {
    average_score: string;
    satisfaction: number;
    total_comments: number;
    score_distribution: number[];
    comments: { userComment: UserComment; adminComment: AdminComment | null }[];
  }

  export type AdminComment = {
    body: string;
    created_at: string;
    name: string;
  };

  export type UserComment = {
    body: string;
    name: string;
    score: number;
    approved_at: string;
  };

  export type PaymentOptions = {
    type: 'cash' | 'credit' | 'check' | null;
    term: number | string | null;
    price: string | null;
    oldPrice?: string | null;
  };

  export interface GetProductDetailsApiRes {
    product: Product;
  }

  export type GetProductFilters = FiltersTypes & {
    en_title: string;
    fa_title: string;
    parent_en_title: string | null;
    parent_fa_title: string | null;
  };

  export type GetAllProductApiRes = PaginationType &
    FiltersTypes & {
      fa_title: string;
      results: Product[];
      total_products?: number;
    };

  interface Meta {
    title: string;
    image: string;
    keyWord: string;
    seoDesc: string;
  }

  export type RelatedProduct = Product;

  export type Aroma = {
    id: number;
    name: string;
    image: string;
    percent: number;
  };

  export type FilterOptionKeys = {
    page: string;
    filterMinPrice: string;
    filterMaxPrice: string;
    filterBrand: string;
    carTitle: string;
    filterCategory: string;
    filterInventory: string;
  };

  export type Payments = {
    type: 'cash' | 'credit' | 'check' | null;
    term: number | string | null;
    price: string | null;
    oldPrice?: string | null;
  };

  export type ProductDetailsSearchQueries = {
    color?: string;
    size?: string;
    brand?: string;
  };
}
