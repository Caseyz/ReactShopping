export default {
  // Check whether the same item exists
  isSameAtArray: (arr: { id: number }[], id: number): { isSame: boolean; index: number } => {
    let index_same = 0;
    const isSame = arr.some((item, index) => {
      index_same = index;
      return item.id === id;
    });
    return {
      isSame,
      index: index_same
    };
  },

  // calculate the total price
  getTotal: (goodsList: { price: string; quantity: number }[]): string => {
    let now_total = 0;
    goodsList.forEach(({ price, quantity }: { price: string; quantity: number }) => {
      now_total += Number(price.slice(1)) * quantity;
    });
    // decimals
    const now_total_string = Number(now_total).toFixed(2);
    return '$' + now_total_string;
  }
};
