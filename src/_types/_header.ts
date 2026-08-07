export type NavBarItem = {
  id: number;
  faName: string;
  type: 'car' | 'product' | null;
  icon?: string;
  path?: string;
  children: NavBarChildItem[];
};
export type NavBarChildItem = {
  id: number;
  faName: string;
  en_name: string;
  icon?: string;
  path?: string;
  children?: NavBarChildSubItem[];
};

export type NavBarChildSubItem = {
  id: number;
  faName: string;
  en_name: string;
  path: string;
  cover?:string
};

export type Notification = {
  image: string;
  summary: string;
  title: string;
  link: string;
};
export type SiteData = {
  logo: string;
  faName: string;
  enName: string;
  url: string;
};

export type HeaderData = {
    notifications: Notification[];
    menu: NavBarItem[];
    siteData:SiteData
};