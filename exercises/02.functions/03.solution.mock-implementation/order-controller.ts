import stockJson from './stock.json'

export interface Order {
  cart: Cart
}

export type Cart = Array<CartItem>

interface CartItem {
  id: number
  name: string
  quantity: number
}

export class OrderController {
  /**
   * Create a new order with the given cart.
   * @throws {Error} If one of the cart items is out of stock.
   */
  public createOrder(args: { cart: Cart }): Order {
    const itemsOutOfStock = args.cart.filter(
      (item) => !this.isItemInStock(item),
    )

    if (itemsOutOfStock.length > 0) {
      const outOfSocketItemIds = itemsOutOfStock.map((item) => item.id)
      throw new Error(
        `Failed to create an order: found out of stock items (${outOfSocketItemIds.join(
          ', ',
        )})`,
      )
    }

    return {
      cart: args.cart,
    }
  }

  /**
   * Check if the given item is in stock.
   */
  public isItemInStock(item: CartItem): boolean {
    const itemInStock = stockJson.items.find((existingItem) => {
      return existingItem.id === item.id
    })

    return itemInStock && itemInStock.quantity >= item.quantity
  }
}
