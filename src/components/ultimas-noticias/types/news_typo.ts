export interface NewsTypo {
  rows: News[];
}

export interface News {
  image: string;
  category: string[];
  title: string;
  body: string;
  date: string;
}
