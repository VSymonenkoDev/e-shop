import {IShoppingCartItem} from "./shopping-cart-item";
import {IProduct} from './product';

export class IShoppingCart {
  items: IShoppingCartItem[] = [];

  constructor(private itemsMap: {[key: string]: IShoppingCartItem}) {
    this.itemsMap = itemsMap || {};
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new IShoppingCartItem({...item, $key: productId}));
    }
  }

  getQuantity(product: IProduct) {
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (let productId in this.items)
      sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items)
      count += this.items[productId].quantity;
    return count;
  }
}
