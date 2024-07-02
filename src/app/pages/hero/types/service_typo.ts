export interface ServiceTypo {
  id: string;
  image: string;
  title: string;
  services: Number[];
}

export interface ServiceFieldTypo {
  field_imagem: FieldImage[];
  field_link: FieldLink[];
  field_titulo: FieldTitulo[];
}

export interface FieldImage {
  alt: string;
  title: string;
  width: number;
  height: number;
  url: string;
}

export interface FieldLink {
  value: string;
}

export interface FieldTitulo {
  value: string;
}

export class Service {
  public id: number
  public titulo: string;
  public icon: string;
  public url: string;

  public constructor(data: any = {}) {
    this.id = data.id || 0
    this.titulo = data.titulo || "";
    this.icon = data.icon || "";
    this.url = data.url || "";
  }
}
