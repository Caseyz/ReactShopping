import Utils from '@/common/js/index';

interface IItem {
  id: number;
  imgSrc: string;
  name: string;
  quantity: number;
  price: string;
}

export function shoppingReducer(
  state: { goodsList: [] },
  action: { payload: { id: number }; type: string }
) {
  const { id } = action.payload;
  const now_goodsList = state.goodsList || [];
  switch (action.type) {
    case 'ADD':
      const { isSame, index } = Utils.isSameAtArray(now_goodsList, id) || {};
      // add shopping cart
      if (isSame) {
        now_goodsList[index]['quantity']++;
      } else {
        // @ts-ignore
        now_goodsList.unshift(action.payload);
      }
      return { goodsList: now_goodsList, total: Utils.getTotal(now_goodsList) };
    case 'DELETE':
      now_goodsList.forEach((item: IItem, index: number) => {
        if (id === item.id) {
          now_goodsList.splice(index, 1);
        }
      });
      return { goodsList: now_goodsList, total: Utils.getTotal(now_goodsList) };
      break;
    case 'ADD_NUMBER':
      // select goods
      now_goodsList.forEach((item: IItem) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
      return { goodsList: now_goodsList, total: Utils.getTotal(now_goodsList) };
    case 'MINUS_NUMBER':
      // select goods
      now_goodsList.forEach((item: IItem) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity--;
        }
      });
      return { goodsList: now_goodsList, total: Utils.getTotal(now_goodsList) };
    default:
      break;
  }
}
