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
  deliveryAddresses: DeliveryAddressType[] | null | undefined;
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

export type DeliveryAddressType = {
  id: string;
  name: string;
  phone: string;
  address: string;
  wards: string;
  district: string;
  city: string;
  country: string;
};
