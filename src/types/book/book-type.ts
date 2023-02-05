export type BookState = {
  _id: string;
  title: string;
  author: string;
  coverImage: string;
  genres: string[];
  price: number;
  price_sale: number;
};

export type BookSingleState = {
  _id: string;
  title: string;
  subtitle: string;
  author: string;
  ageGroup: string;
  coverImage: string;
  description: string;
  genres: string[];
  images: string[];
  language: string;
  country: string;
  pages: number;
  price: number;
  price_sale: number;
  publisher: string;
  saleDate: string;
  createdAt: string;
};
