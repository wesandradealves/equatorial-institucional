export interface NewsTypo {
  rows: News[];
}

export interface News {
  nid: any;
  image: string;
  category: string[];
  title: string;
  body: string;
  summary: string;
  date: string;
}
