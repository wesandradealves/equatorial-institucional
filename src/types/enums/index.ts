export enum EHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface DataTypo {
    pt_br: DataTypo
    copyright?: {
        en?: string
        pt_br?: string
    }
    site_name?: string
    basePath?: string
    logo?: string
    location_screen_bg?: string
    favico?: string
}

export interface ConfigTypo {
    data?: Record<any, DataTypo>
    config?: Record<any, DataTypo>
    setConfig?: React.Dispatch<any>
}

export interface ServicesTypo {
  field_link?: {
    value: String
  }
  field_titulo?: {
    value: String
  }
  field_imagem?: {
    value: String
  }
}

export interface BannerTypo {
  [x: string]: any
  image?: String
  clara_shortcut?: String
  title?: String
  services?: any
}

export interface NavTypo {
    title?: String
    description?: String
    uri?: String
}

interface SettingsBlockTypo {
    id?: any
}

export interface BlockTypo {
    rows?: any | undefined
    settings?: Record<any, SettingsBlockTypo>
    id?: string | undefined
    title?: any | undefined
    info?: string | undefined
    body?: any | undefined
    cta_label?: string | undefined
    cta_url?: string | undefined
    text?: any | undefined
}

export interface BlockShortsTypo {
    title?: string | undefined
    thumbnail?: string | undefined
    url?: string | undefined
    video?: string | undefined
    category?: any | undefined
}

export interface ServiceTypo {
    id?: string
    image?: string
    title?: string
    services?: Number[]
}

export interface ServiceFieldTypo {
    field_imagem?: FieldImage[]
    field_link?: FieldLink[]
    field_titulo?: FieldTitulo[]
}

export interface FieldImage {
    alt?: string
    title?: string
    width?: number
    height?: number
    url?: string
}

export interface FieldLink {
    value?: string
}

export interface FieldTitulo {
    value?: string
}

export class Service {
    public id?: number
    public titulo?: string
    public icon?: string
    public url?: string

    public constructor(data: any = {}) {
        this.id = data.id || 0
        this.titulo = data.titulo || ""
        this.icon = data.icon || ""
        this.url = data.url || ""
    }
}

export interface NavigationTypo {
	title?: string,
	description?: string
	absolute?: string
	below?: NavigationTypo[]
}

export interface FooterData {
  data?: Record<any, FooterTypo> 
}

export interface FooterTypo {
  phone?: {
    en?: string
    pt_br?: string
  }
  social_networks?: SocialNetworksTypo,
  store?: StoreTypo,
  contact?: ContactTypo,
}

export interface SocialNetworksTypo {
  links?: {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  }
  label?: {
    en?: string
    pt_br?: string
  }
}

export interface StoreTypo {
  links?: {
    appstore?: {
      img?: string
      url?: string
    }
    googleplay?: {
      img?: string
      url?: string
    }
  }
  label?: {
    en?: string
    pt_br?: string
  }
}

export interface ContactTypo {
  phone?: {
    pt_br?: string
    en?: string
  }
  talktous?: {
    pt_br?: string
    en?: string
    url?: string
  }
  talktoclara?: {
    pt_br?: string
    en?: string
    url?: string
    img?: string
  }
}

export interface NavColTypo {
  props?: any;
}