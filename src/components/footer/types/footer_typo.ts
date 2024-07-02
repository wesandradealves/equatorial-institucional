export interface FooterData {
  data: Record<any, FooterTypo>; 
}

export interface FooterTypo {
  social_networks: SocialNetworksTypo,
  store: StoreTypo,
  contact: ContactTypo,
}

export interface SocialNetworksTypo {
  links: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  label: {
    en: string;
    pt_br: string;
  };
}

export interface StoreTypo {
  links: {
    appstore: {
      img: string;
      url: string;
    };
    googleplay: {
      img: string;
      url: string;
    };
  };
  label: {
    en: string;
    pt_br: string;
  };
}

export interface ContactTypo {
  phone: {
    pt_br: string;
    en: string;
  };
  talktous: {
    pt_br: string;
    en: string;
    url: string;
  };
  talktoclara: {
    pt_br: string;
    en: string;
    url: string;
    img: string;
  };
}