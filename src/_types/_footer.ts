export interface FooterApiRes {
  features: FooterFeatures;
  description: FooterDescription;
  links: FooterLink[];
  symbol: { content: string }[];
  links_2: FooterLink[];
  links_3: FooterLink[];
  slogans: FooterSlogan[];
  email: string;
  phone: string;
  long_description: string;
  address: string;
  socialMedias: [
    {
      enTitle: string;
      link: string;
    },
  ];
}

export interface FooterSlogan {
  title: string;
  icon: string;
}

export interface FooterLink {
  title: string;
  icon: string;
  links: [
    {
      title: string;
      url: string;
    },
  ];
}

export interface FooterDescription {
  image: string;
  content: string;
}

export interface FooterFeatures {
  title: string;
  items: [
    {
      title: string;
      subtitle: string;
      icon: string;
    },
  ];
}
