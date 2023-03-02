import { DeliveryAddressType } from "../auth/auth-type";
import { CartState } from "../cart/cart-type";

export type OrderState = {
  _id: string;
  userId: string;
  items: CartState[];
  subtotal: number;
  total: number;
  delivery_address: DeliveryAddressType;
  status: string;
  payment: string;
  shipping: string;
  created_at: string;
};
