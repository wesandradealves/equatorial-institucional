interface FooterTypo {
  social_networks: {
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
  };
  store: {
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
  };
  contact: {
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
  };
}
