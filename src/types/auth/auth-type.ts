export type UserState = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};
