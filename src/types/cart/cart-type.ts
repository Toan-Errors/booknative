export type CartItem = {
  bookId: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  price_sale: number;
  quantity: number;
};

export type CartState = {
  _id: string;
  bookId: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  price_sale: number;
  quantity: number;
};
