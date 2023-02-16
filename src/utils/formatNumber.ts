export function formatNumber(number: number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatVND(number: number) {
  try {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " đ";
  } catch (error) {
    return "0 đ";
  }
}
