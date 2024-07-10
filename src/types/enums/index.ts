export enum EHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface DataTypo {
    pt_br: DataTypo
    copyright?: any | undefined
    site_name?: string | undefined
    basePath?: string | undefined
    logo?: string | undefined
    location_screen_bg?: string | undefined
    favico?: string | undefined
}

export interface ConfigTypo {
    data?: any | undefined
    config?: any | undefined
    setConfig?: React.Dispatch<any>
}

export interface ServicesTypo {
  field_link?: any
  field_titulo?: any
  field_imagem?: any
}

export interface BannerTypo {
  [x: string]: any
  image?: String | undefined
  clara_shortcut?: String | undefined
  title?: String | undefined
  services?: any | undefined
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
    settings?: any | undefined
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
    services?: any
}

export interface ServiceFieldTypo {
    field_imagem?: any
    field_link?: any
    field_titulo?: any
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
  data?: any
	title?: string
	description?: string
	absolute?: string
	below?: any
  navigation?: any 
  className?: any
  setNavigation?: React.Dispatch<any>  
}

export interface FooterData {
  data?: any
}

export interface FooterTypo {
  phone?: any
  social_networks?: any,
  store?: any,
  contact?: any,
}

export interface SocialNetworksTypo {
  links?: any
  label?: any
}

export interface StoreTypo {
  links?: any
  label?: any
}

export interface ContactTypo {
  phone?: any
  talktous?: any
  talktoclara?: any
}

export interface NavColTypo {
  props?: any
}

export interface HeaderTypo {
  text: any
  tariff_band: any
  searchbar: any
}

export interface LanguagesTypo {
  [x: string]: any
  lang?: any | undefined
  setLanguage?: React.Dispatch<any>  
}