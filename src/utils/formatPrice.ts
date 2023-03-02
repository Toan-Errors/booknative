import { formatVND } from "./formatNumber";

export function Price(price: number, price_sale: number) {
  if (price_sale === 0) {
    return formatVND(price);
  } else {
    if (price_sale < price) {
      return formatVND(price_sale);
    } else {
      return formatVND(price);
    }
  }
}

export function TotalPrice(
  price: number,
  price_sale: number,
  quantity: number
) {
  if (price_sale === 0) {
    return formatVND(price * quantity);
  } else {
    if (price_sale < price) {
      return formatVND(price_sale * quantity);
    } else {
      return formatVND(price * quantity);
    }
  }
}
