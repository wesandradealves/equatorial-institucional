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