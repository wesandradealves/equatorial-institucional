export enum EHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface DataTypo {
    copyright: {
        en: string
        pt_br: string
    }
    site_name: string
    basePath: string
    logo: string
    location_screen_bg: string
    favico: string
}

export interface ConfigTypo {
    data: Record<any, DataTypo>; 
}

export interface NavTypo {
    title: String
    description: String
    uri: String
}

interface SettingsBlockTypo {
    id: any;
}

export interface BlockTypo {
    rows: any | undefined
    settings: Record<any, SettingsBlockTypo> 
    id: string | undefined
    title: any | undefined
    info: string | undefined
    body: any | undefined
    cta_label: string | undefined
    cta_url: string | undefined
    text: any | undefined
}

export interface BlockShortsTypo {
    title: string | undefined
    thumbnail: string | undefined
    url: string | undefined
    video: string | undefined
    category: any | undefined
}